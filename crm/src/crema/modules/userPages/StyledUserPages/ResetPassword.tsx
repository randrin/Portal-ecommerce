import React from "react";
import IntlMessages from "@crema/helpers/IntlMessages";
import AppAnimate from "@crema/components/AppAnimate";
import { Col, Form, Input } from "antd";
import { useIntl } from "react-intl";
import AppRowContainer from "@crema/components/AppRowContainer";
import AppPageMeta from "@crema/components/AppPageMeta";
import Logo from "../../../../assets/user/reset-password.png";
import {
  StyledUserCardHeader,
  StyledUserCardLg,
  StyledUserContainer,
  StyledUserForm,
  StyledUserFormBtn,
  StyledUserPages,
  StyledUserStyledImgAuto,
  StyledUserStyledResetImgCol,
} from "../index.styled";
import Image from "next/image";

const onFinish = (values: any) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const ResetPassword = () => {
  const { messages } = useIntl();

  return (
    <StyledUserPages>
      <AppPageMeta title="Reset Password" />
      <AppAnimate animation="transition.slideUpIn" delay={200}>
        <StyledUserContainer key="a">
          <StyledUserCardLg>
            <AppRowContainer>
              <StyledUserStyledResetImgCol xs={24} md={12}>
                <StyledUserStyledImgAuto className="user-styled-img">
                  <Image alt="logo" src={Logo} />
                </StyledUserStyledImgAuto>
              </StyledUserStyledResetImgCol>

              <Col xs={24} md={12}>
                <StyledUserCardHeader>
                  <h3>
                    <IntlMessages id="common.resetPassword" />
                  </h3>
                </StyledUserCardHeader>

                <StyledUserForm
                  className="mb-0"
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                >
                  <Form.Item
                    name="oldPassword"
                    className="form-field"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Old Password!",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder={messages["common.oldPassword"] as string}
                    />
                  </Form.Item>

                  <Form.Item
                    name="newPassword"
                    className="form-field"
                    rules={[
                      {
                        required: true,
                        message: "Please input your New Password!",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder={messages["common.newPassword"] as string}
                    />
                  </Form.Item>

                  <Form.Item
                    name="confirmPassword"
                    className="form-field"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Retype Password!",
                      },
                    ]}
                  >
                    <Input
                      type="password"
                      placeholder={messages["common.retypePassword"] as string}
                    />
                  </Form.Item>

                  <StyledUserFormBtn type="primary" htmlType="submit">
                    <IntlMessages id="common.resetMyPassword" />
                  </StyledUserFormBtn>
                </StyledUserForm>
              </Col>
            </AppRowContainer>
          </StyledUserCardLg>
        </StyledUserContainer>
      </AppAnimate>
    </StyledUserPages>
  );
};

export default ResetPassword;
