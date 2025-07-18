import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Larvitar",
         ja: "幼虫",
         fr: "Larvi",
         de: "Larvitar",
         es: "Larvito",
         it: "Larvitar",
         pt: "Larvitar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [246],
      hp: 40,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Mountain Eater",
            ja: "マウンテンイーター",
            fr: "Mangeur de montagne",
            de: "Bergfresser",
            es: "Comedor de montaña",
            it: "Mangoscia",
            pt: "Mountain Eater",
          },
          effect: {
            en: "Your opponent discards the top card from his or her deck. Then you remove a damage counter from Larvitar.",
            ja: "あなたの対戦相手は彼または彼女のデッキからトップカードを捨てます。次に、Larvitarからダメージカウンターを削除します。",
            fr: "Votre adversaire rejette la carte supérieure de son deck. Ensuite, vous supprimez un compteur de dégâts de la larve.",
            de: "Dein Gegner verwirft die Top -Karte von seinem Deck. Dann entfernen Sie einen Schadenschalter von Larvitar.",
            es: "Tu oponente descarta la carta superior de su mazo. Luego eliminas un mostrador de daño de la larvita.",
            it: "Il tuo avversario scarta la carta superiore dal suo mazzo. Quindi rimuovi un contatore di danni da Larvitar.",
            pt: "Seu oponente descarta a carta de primeira linha do deck dele ou dela. Então você remove um contador de danos da larvitar.",
          },
        },
        {
          cost: ["Fighting"],
          name: {
            en: "Rising Lunge",
            ja: "上昇する突進",
            fr: "Fente croissante",
            de: "Steigender Longe",
            es: "Estocada",
            it: "Affondo in aumento",
            pt: "Rising Bunge",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 10 dégâts plus 10 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 10 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 10 daños más.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 10 danni più 10 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 10 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
