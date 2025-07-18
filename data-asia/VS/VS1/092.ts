import {Card} from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
      set: Set,
      name: {
         en: "Karen's Houndoom",
         ja: "カレンの猟犬",
         fr: "Chèvre de Karen",
         de: "Karen's Houndoom",
         es: "HUEMO DE KAREN",
         it: "Houndaom di Karen",
         pt: "Houndoom de Karen",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [229],
      hp: 60,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Roar",
            ja: "ro音",
            fr: "Rugir",
            de: "Brüllen",
            es: "Rugido",
            it: "Ruggito",
            pt: "Rugido",
          },
          effect: {
            en: "If your opponent has any Benched Pokemon, flip a coin. If heads, he or she switches the Defending Pokemon with 1 of them.",
            ja: "相手がベンチ付きポケモンを持っている場合は、コインをひっくり返します。頭の場合、彼または彼女は、ディフェンディングポケモンをそれらの1つと交換します。",
            fr: "Si votre adversaire a des pokemon bancés, retournez une pièce. Si les têtes, il ou elle change le Pokémon en défense avec un d'entre eux.",
            de: "Wenn Ihr Gegner Pokémon mit Bank hat, drehen Sie eine Münze. Wenn Köpfe, wechselt er oder sie das verteidigende Pokémon mit 1 von ihnen.",
            es: "Si tu oponente tiene algún Pokémon de banca, voltea una moneda. Si se dirige, él o ella cambia al Pokémon defensor con 1 de ellos.",
            it: "Se il tuo avversario ha un Pokemon in panchina, capovolgi una moneta. Se la testa, cambia il Pokemon in difesa con 1 di loro.",
            pt: "Se o seu oponente tiver algum Pokémon em banco, vire uma moeda. Se as cabeças, ele ou ela troca o Pokémon atual com 1 deles.",
          },
        },
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Blazing Breath",
            ja: "燃える息",
            fr: "Haleine fulgurante",
            de: "Loderner Atem",
            es: "Aliento ardiente",
            it: "Blazing Authow",
            pt: "Respiração ardente",
          },
          effect: {
            en: "Flip a coin. If heads, discard 1 Fire Energy card attached to Karen's Houndoom and this attack does 20 damage plus 20 more damage.",
            ja: "コインをひっくり返します。頭の場合は、カレンの猟犬に取り付けられた1つのファイアエネルギーカードを捨ててください。この攻撃は20のダメージと20ダメージを与えます。",
            fr: "Retourner une pièce. Si les têtes, jetez la carte d'énergie de feu 1 attachée à Karen's Houndoom et cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, verwerfen Sie 1 Feuerergiekarte, die an Karen's Houndoom angebracht ist, und dieser Angriff schädigt 20 Schaden zu und 20 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, deseche 1 tarjeta de energía de fuego unida al Hoodoom de Karen y este ataque hace 20 daños más 20 más de daño.",
            it: "Capovolgi una moneta. Se le teste, scartare 1 carta di energia antincendio attaccata al segugio di Karen e questo attacco infligge 20 danni più 20 danni.",
            pt: "Vire uma moeda. Se as cabeças, descarte 1 cartão de energia de incêndio preso ao Houndoom de Karen e esse ataque causa 20 danos mais 20 mais danos.",
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
