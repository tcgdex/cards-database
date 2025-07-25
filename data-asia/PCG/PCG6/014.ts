import {Card} from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Pupitar (Delta Species)",
         ja: "Pupitar（デルタ種）",
         fr: "Pupitare (espèces delta)",
         de: "Pupitar (Delta -Arten)",
         es: "Pupitar (especie delta)",
         it: "PUPITAR (Delta Species)",
         pt: "Pup (espécies delta)",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [247],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Paralyzing Gaze",
            ja: "麻痺する視線",
            fr: "Regard paralysant",
            de: "Lähmendem Blick",
            es: "Mirada paralizante",
            it: "Sguardo paralizzante",
            pt: "Olhar paralisante",
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
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Double-edge",
            ja: "ダブルエッジ",
            fr: "À double bord",
            de: "Doppelkante",
            es: "De doble borde",
            it: "Doppio bordo",
            pt: "Dupla borda",
          },
          effect: {
            en: "Pupitar does 10 damage to itself.",
            ja: "Pupitarはそれ自体に10ダメージを与えます。",
            fr: "Pupiter fait 10 dégâts à lui-même.",
            de: "Pupitar schädigt sich 10.",
            es: "Pupitar hace 10 daños a sí mismo.",
            it: "Pupitar fa 10 danni a se stesso.",
            pt: "O filhote causa 10 danos a si mesmo.",
          },
          damage: 40,
        },
      ],


      variants: [
        {
          type: "normal",
          subtype: "unlimited',
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
