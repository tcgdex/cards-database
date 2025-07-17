import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Magneton",
         ja: "ダークマグネトン",
         fr: "Magnéton sombre",
         de: "Dunkler Magneton",
         es: "Magneton oscuro",
         it: "Magneton scuro",
         pt: "Magneton escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [82],
      hp: 60,
      types: ["Lightning"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Sonicboom",
            ja: "Sonicboom",
            fr: "Sonicboom",
            de: "Sonicboom",
            es: "Sonicboom",
            it: "Sonicboom",
            pt: "Sonicboom",
          },
          effect: {
            en: "Don't apply Weakness and Resistance for this attack. (Any other effects that would happen after applying Weakness and Resistance still happen.)",
            ja: "この攻撃に衰弱と抵抗を適用しないでください。 （衰弱と抵抗を適用した後に発生する他の効果はまだ起こります。）",
            fr: "N'appliquez pas la faiblesse et la résistance pour cette attaque. (Tout autre effet qui se produirait après avoir appliqué une faiblesse et une résistance se produit.)",
            de: "Wenden Sie keine Schwäche und Widerstand für diesen Angriff an. (Alle anderen Effekte, die nach der Anwendung von Schwächen und Widerstand auftreten würden.)",
            es: "No aplique debilidad y resistencia para este ataque. (Cualquier otro efecto que suceda después de aplicar debilidad y resistencia aún ocurre).",
            it: "Non applicare debolezza e resistenza per questo attacco. (Qualsiasi altro effetto che si verificherebbe dopo aver applicato la debolezza e la resistenza.)",
            pt: "Não aplique fraqueza e resistência a este ataque. (Quaisquer outros efeitos que aconteceriam após aplicar fraqueza e resistência ainda acontecem.)",
          },
          damage: 20,
        },
        {
          cost: ["Lightning", "Lightning"],
          name: {
            en: "Magnetic Lines",
            ja: "磁気線",
            fr: "Lignes magnétiques",
            de: "Magnetleitungen",
            es: "Líneas magnéticas",
            it: "Linee magnetiche",
            pt: "Linhas magnéticas",
          },
          effect: {
            en: "If the Defending Pokemon has any basic Energy cards attached to it, choose 1 of them. If your opponent has any Benched Pokemon, choose 1 of them and attach that Energy card to it.",
            ja: "防御するポケモンに基本的なエネルギーカードが付属している場合は、そのうちの1つを選択します。対戦相手がベンチポケモンを持っている場合は、それらの1つを選択して、そのエネルギーカードを添付します。",
            fr: "Si le Pokémon en défense a des cartes d'énergie de base qui y sont attachées, choisissez 1 d'entre elles. Si votre adversaire a des pokemon bancés, choisissez 1 d'entre eux et attachez cette carte d'énergie.",
            de: "Wenn das verteidigende Pokemon grundlegende Energiekarten mit sich bringt, wählen Sie 1 davon. Wenn Ihr Gegner ein Bank -Pokémon hat, wählen Sie 1 davon und fügen Sie diese Energiekarte daran.",
            es: "Si el Pokémon defensor tiene alguna tarjeta de energía básica unidas, elija 1 de ellas. Si tu oponente tiene algún Pokémon de banca, elija 1 de ellos y adjunte esa tarjeta de energía.",
            it: "Se il Pokemon in difesa ha delle carte energetiche di base collegate ad esso, scegli 1 di esse. Se il tuo avversario ha dei Pokemon in panchina, scegline 1 e attacca quella scheda energetica.",
            pt: "Se o Pokémon atual tiver algum cartão de energia básico anexado a ele, escolha 1 deles. Se o seu oponente tiver algum Pokémon em banco, escolha 1 deles e anexe esse cartão de energia a ele.",
          },
          damage: 30,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
