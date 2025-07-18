import {Card} from "../../../interfaces"
import Set from "../PCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Ho-Oh ex",
         ja: "ho-oh ex",
         fr: "Ho-oh ex",
         de: "Ho-oh ex",
         es: "Ho-oh ex",
         it: "Ho-oh ex",
         pt: "Ho-oh ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [250],
      hp: 110,
      types: ["Fire"],
      stage: "Basic",

      abilities: [
        {
          name: {
            en: "Golden Wing",
            ja: "ゴールデンウィング",
            fr: "Aile dorée",
            de: "Goldener Flügel",
            es: "Ala dorada",
            it: "Golden Wing",
            pt: "Asa de ouro",
          },
          effect: {
            en: "If Ho-Oh ex would be Knocked Out by damage from an opponent's attack, you may move up to 2 Energy attached to Ho-Oh ex to your PokÃ©mon in any way you like.",
            ja: "Ho-oh Exが相手の攻撃によるダメージによってノックアウトされた場合、あなたが好きな方法でHo-oh exに2つのエネルギーをあなたのポカモンに移動することができます。",
            fr: "Si Ho-Oh Ex était assommé par les dommages de la part de l'attaque d'un adversaire, vous pouvez passer à 2 énergie attachée à Ho-Oh Ex à votre poké de quelque manière que ce soit.",
            de: "Wenn ho-oh ex durch Schäden durch den Angriff eines Gegners ausgefallen wäre, können Sie in irgendeiner Weise, die Sie möchten, bis zu 2 Energie an HO-oh ex an Ihren Poké mon verschieben.",
            es: "Si Ho-oh ex sería noqueado por el daño del ataque de un oponente, puede moverse hasta 2 energía unida a Ho-oh ex a su Poké Mon de cualquier manera que desee.",
            it: "Se Ho-oh ex verrebbe eliminato da danni da un attacco di un avversario, puoi spostarti fino a 2 energia attaccata a Ho-oh ex al tuo poké in qualsiasi modo desideri.",
            pt: "Se o Ho-OH ex for derrubado por danos causados pelo ataque de um oponente, você poderá subir até 2 energia anexada a ho-oh ex ao seu Poké Mon da maneira que quiser.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless", "Colorless"],
          name: {
            en: "Rainbow Burn",
            ja: "レインボーバーン",
            fr: "Arc-en-ciel",
            de: "Regenbogenbrand",
            es: "Quemadura del arco iris",
            it: "Arcobaleno brucia",
            pt: "Arco -íris queima",
          },
          effect: {
            en: "Does 10 damage plus 20 more damage for each type of basic Energy card attached to Ho-Oh ex.",
            ja: "Ho-Oh Exに取り付けられた各タイプの基本エネルギーカードに対して、10のダメージと20のダメージを与えます。",
            fr: "Fait 10 dégâts plus 20 dommages supplémentaires pour chaque type de carte d'énergie de base attachée à Ho-oh Ex.",
            de: "Fügt 10 Schäden plus 20 weitere Schäden für jede Art von Basiskarte, die an Ho-oh EX angebracht ist.",
            es: "Hace 10 daños más 20 más de daño para cada tipo de tarjeta de energía básica unida a Ho-OH Ex.",
            it: "Fa 10 danni più 20 danni in più per ciascun tipo di carta di energia di base collegata a Ho-OH Ex.",
            pt: "10 danos mais 20 mais danos para cada tipo de cartão de energia básico anexado ao ho-oh ex.",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
