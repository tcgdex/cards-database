import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Omanyte",
         ja: "オマニテ",
         fr: "Omanyte",
         de: "Omanyte",
         es: "Omanyte",
         it: "Omanyte",
         pt: "Omanyte",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [138],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Ancient Tentacles",
            ja: "古代の触手",
            fr: "Tentacules antiques",
            de: "Alte Tentakel",
            es: "Tentáculos antiguos",
            it: "Antichi tentacoli",
            pt: "Tentáculos antigos",
          },
          effect: {
            en: "Damage done to your opponent's PokÃ©mon by your Omanyte, Omastar, Kabuto, Kabutops, or Kabutops ex isn't affected by Resistance.",
            ja: "あなたのオマニテ、オマスター、カブト、カブトップス、またはカブトップスの元によって相手のポカモンに与えられた損害は抵抗の影響を受けません。",
            fr: "Les dommages causés au Poké de votre adversaire par votre Omanyte, Omastar, Kabuto, Kabutops ou Kabutops Ex ne sont pas affectés par la résistance.",
            de: "Schäden an den Poké Mons Ihres Gegners durch Ihre Omanyte, Omastar, Kabuto, Kabutops oder Kabutops Ex sind nicht von Widerstand betroffen.",
            es: "Daño hecho a Poké Mon de tu oponente por tu Omanyte, OmaStar, Kabuto, Kabutops o Kabutops EX no se ve afectado por la resistencia.",
            it: "Danni arrecati al poké del tuo avversario dal tuo Omanyte, Omastar, Kabuto, Kabutops o Kabutops Ex non è influenzato dalla resistenza.",
            pt: "Os danos causados ao Poké Mon do seu oponente pelo seu Omanyte, Omastar, Kabuto, Kabutops ou Kabutops ex não são afetados pela resistência.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Colorless"],
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
            en: "Flip a coin. If heads, this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se la testa, questo attacco infligge 20 danni più 20 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 20 danos mais 20 mais danos.",
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
