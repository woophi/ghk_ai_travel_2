import { BottomSheet } from '@alfalab/core-components/bottom-sheet';
import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { List } from '@alfalab/core-components/list';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import robotImg from './assets/robot.png';
import { appSt } from './style.css';

const chatBotLink =
  'alfabank://configurable_chat?sourceChannelId=AI1_CHAT&navigationTitle=%D0%90%D0%BB%D1%8C%D1%84%D0%B0-%D0%90%D1%81%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BD%D1%82&attachmentsPickerEnabled=false&suggestionsEnabled=false&welcomeMessageEnabled=false&voiceMessageEnabled=false&quotesEnabled=false';

export const App = () => {
  const [showBs, setShowBs] = useState(false);
  const [showBsRules, setShowBsRules] = useState(false);

  return (
    <>
      <div className={appSt.container}>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <Typography.TitleResponsive tag="h1" view="large" font="system" weight="semibold">
            Альфа-ассистент
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" color="secondary">
            Работает в тестовом режиме
          </Typography.Text>
        </div>
        <img src={robotImg} width={80} height={80} style={{ alignSelf: 'center' }} />
        <div className={appSt.chat({})}>
          <div className={appSt.chatBubble({ position: 'top' })}>
            <Typography.Text view="primary-medium">Здравствуйте!</Typography.Text>
          </div>
          <div className={appSt.chatBubble({ position: 'middle' })}>
            <Typography.Text view="primary-medium">Я ваш виртуальный помощник.</Typography.Text>
          </div>
          <div className={appSt.chatBubble({ position: 'bottom' })}>
            <Typography.Text view="primary-medium">
              Посоветую популярные места, подберу отель, подскажу, где пообедать или интересно провести время и многое
              другое.
            </Typography.Text>
            <div style={{ marginTop: '1rem' }}>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" color="secondary">
                Примеры вопросов:
              </Typography.Text>
              <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
                Сколько часов лететь до Калининграда?
              </Typography.Text>
              <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
                Подскажи, что посмотреть в Казани?
              </Typography.Text>
              <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
                Посоветуй, где поужинать в Питере?
              </Typography.Text>
            </div>
          </div>
        </div>
      </div>

      <div style={{ height: '150px' }} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          onClick={() => {
            window.gtag('event', 'next_AI_Travel_var2');
            setShowBs(true);
          }}
        >
          Продолжить
        </ButtonMobile>
        <Typography.Text view="primary-medium" color="secondary">
          Продолжая, вы соглашаетесь с{' '}
          <span
            onClick={() => {
              window.gtag('event', 'rules_AI_Travel_var2');
              setShowBsRules(true);
            }}
            style={{ textDecoration: 'underline', color: '#000' }}
          >
            правилами использования
          </span>
          .
        </Typography.Text>
      </div>

      <BottomSheet
        open={showBsRules}
        onClose={() => {
          setShowBsRules(false);
        }}
        contentClassName={appSt.btmContent}
        hasCloser
        stickyHeader
      >
        <div className={appSt.containerBottom}>
          <Typography.TitleResponsive tag="h2" view="large" weight="bold">
            Правила использования ИИ-Ассистента.
          </Typography.TitleResponsive>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            Важное уведомление перед использованием сервиса «ИИ Ассистента» (Сервис).
          </Typography.Text>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            В Сервисе задействованы нейронные сети (генеративный искусственный интеллект).
          </Typography.Text>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            Правила использования Сервиса урегулированы в Договоре о комплексном банковском обслуживании физических лиц в АО
            «АЛЬФА-БАНК», заключенном мной с АО «АЛЬФА-БАНК» (Банк). Нажимая кнопку «Продолжить» я безусловно и в полном
            объеме принимаю настоящие Правила (без каких-либо изъятий и ограничений), а также подтверждаю ознакомление с
            редакцией Правил, действующей на момент принятия их мной (совершения указанных выше действий). В случае
            несогласия с условиями Правил я не вправе использовать Сервис.
          </Typography.Text>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            Я понимаю и принимаю, что использование Сервиса не предполагает обработку персональных данных каких-либо
            физических лиц, включая персональные данные специальной категории и биометрические персональные данные, кроме
            тех, которые связаны с определением меня АО «Альфа-Банк» (107078, город Москва, Каланчевская ул., д.27) в
            качестве лица, которое подтверждает ознакомление и принятие настоящих Правил и необходимы для исполнения условий
            настоящих Правил и которые были предоставлены мной при заключении Договора о комплексном банковском обслуживании
            физических лиц в АО «АЛЬФА-БАНК».
          </Typography.Text>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            Способы обработки персональных данных, указанных в абзаце выше: с использованием средств автоматизации или без
            использования таких средств, включая: сбор, запись, систематизацию, накопление, хранение, уточнение (обновление,
            изменение) извлечение, использование, блокирование, удаление, уничтожение персональных данных, а также их
            передачу (предоставление, доступ). Обработка персональных данных будет осуществляться в течение использования
            Сервиса, а после прекращения такового в течение сроков, предусмотренных действующим законодательством РФ.
          </Typography.Text>

          <Typography.TitleResponsive tag="h2" view="large" weight="bold">
            При использовании Сервиса я обязуюсь:
          </Typography.TitleResponsive>

          <List tag="ul">
            <List.Item>
              <Typography.Text view="primary-medium">
                не размещать, не загружать и не раскрывать каким-либо образом личную и конфиденциальную информацию, включая
                сведения, содержащие банковскую тайну, и персональные данные, которые в соответствии с законодательством РФ
                относятся к таковым (ФИО, данные документов, удостоверяющих личность, адрес электронной почты, адрес
                регистрации/проживания, номер счета, номер и иные реквизиты карты, номер телефона и др.), как в отношении
                меня, так и в отношении любых иных лиц;
              </Typography.Text>
            </List.Item>
            <List.Item>
              <Typography.Text view="primary-medium">
                ответы (результаты), полученные в рамках Сервиса, адаптировать под собственные нужды;
              </Typography.Text>
            </List.Item>
            <List.Item>
              <Typography.Text view="primary-medium">
                при использовании ответов, полученных в рамках Сервиса, не указывать, что ответы получены от Банка или
                являются позицией Банка;
              </Typography.Text>
            </List.Item>
            <List.Item>
              <Typography.Text view="primary-medium">
                проверять информацию в других источниках из-за возможных ошибок искусственного интеллекта;
              </Typography.Text>
            </List.Item>
            <List.Item>
              <Typography.Text view="primary-medium">
                не использовать Сервис для нарушения нормативных правовых актов, норм морали и нравственности, введения в
                заблуждение либо распространения недостоверной информации.
              </Typography.Text>
            </List.Item>
          </List>
          <Typography.Text tag="p" defaultMargins={false} view="primary-medium">
            Я осознаю, что соблюдение данных условий необходимо для корректной работы Сервиса и несу ответственность за
            исполнение условий и использование Сервиса и ответов (результатов), полученных в рамках Сервиса.
          </Typography.Text>
        </div>
      </BottomSheet>

      <BottomSheet
        open={showBs}
        onClose={() => {
          setShowBs(false);
        }}
        contentClassName={appSt.btmContent}
        actionButton={
          <ButtonMobile
            block
            view="primary"
            href={chatBotLink}
            onClick={() => {
              window.gtag('event', 'agree_AI_Travel_var2');
            }}
          >
            Понятно, продолжить
          </ButtonMobile>
        }
      >
        <div className={appSt.containerBottom}>
          <Typography.TitleResponsive tag="h2" view="large" weight="bold">
            Обратите внимание
          </Typography.TitleResponsive>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
            Альфа-ассистент пока работает в тестовом режиме, поэтому отвечает чуть дольше.
          </Typography.Text>
          <Typography.Text view="primary-medium" tag="p" defaultMargins={false}>
            Иногда он может ошибаться — лучше перепроверить информацию, если вопрос важный.
          </Typography.Text>
        </div>
      </BottomSheet>
    </>
  );
};
