import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Kingler (Delta Species)",
         ja: "キングラー（デルタ種）",
         fr: "Kingler (espèce delta)",
         de: "Kingler (Delta -Arten)",
         es: "Kingler (especie delta)",
         it: "Kingler (Delta Species)",
         pt: "Kingler (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [99],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Metal", "Colorless"],
          name: {
            en: "Body Slam",
            ja: "ボディスラム",
            fr: "Claquement de corps",
            de: "Body Slam",
            es: "Cañón de cuerpo",
            it: "Body Slam",
            pt: "Body Slam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 30,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Prop-up Pinchers",
            ja: "プロップアップピンチャー",
            fr: "Pinchers",
            de: "Prop-up-Prise",
            es: "Pinchers",
            it: "Pincher di propensione",
            pt: "Propunce Binchers",
          },
          effect: {
            en: "If Kingler has a Pokemon Tool card attached to it, this attack does 40 damage plus 40 more damage.",
            ja: "Kinglerにポケモンツールカードが付属している場合、この攻撃は40ダメージに加えて40ダメージを与えます。",
            fr: "Si Kingler a une carte à outils Pokemon attachée, cette attaque fait 40 dégâts plus 40 dégâts supplémentaires.",
            de: "Wenn Kingler eine Pokemon -Werkzeugkarte mit sich bringt, verursacht dieser Angriff 40 Schäden plus 40 weitere Schäden.",
            es: "Si Kingler tiene una tarjeta de herramienta Pokemon adjunta, este ataque hace 40 daños más 40 daños más.",
            it: "Se Kingler ha una scheda utensile Pokemon collegata ad essa, questo attacco infligge 40 danni più 40 danni.",
            pt: "Se Kingler tiver um cartão de ferramenta Pokemon anexado a ele, esse ataque causará 40 danos mais 40 danos.",
          },
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
