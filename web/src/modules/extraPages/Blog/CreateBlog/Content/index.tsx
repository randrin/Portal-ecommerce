import React from "react";
import AppCard from "@crema/components/AppCard";
import ImgUpload from "./ImageUpload";
import { StyledFormWrapper, StyledText, StyledTextarea } from "../index.styled";
import { Col, Form, Input } from "antd";
import { FileType } from "@crema/types/models/extrapages/Blog";

const { TextArea } = Input;

type Props = {
  uploadedFiles: FileType[];
  setUploadedFiles: React.Dispatch<React.SetStateAction<FileType[]>>;
};

const BlogContent = ({ uploadedFiles, setUploadedFiles }: Props) => {
  return (
    <Col xs={24} lg={16}>
      <AppCard>
        <StyledFormWrapper>
          <Form.Item label="Blog Name" name="title">
            <Input placeholder="Blog Name" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="Description here" />
          </Form.Item>
          <Form.Item label="Content" name="content">
            <StyledTextarea theme="snow" placeholder="Description here" />
          </Form.Item>
          <StyledText>Cover Image</StyledText>
          <ImgUpload
            uploadedFiles={uploadedFiles}
            setUploadedFiles={setUploadedFiles}
          />
        </StyledFormWrapper>
      </AppCard>
    </Col>
  );
};

export default BlogContent;
