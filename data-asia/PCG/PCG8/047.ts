import {Card} from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
      set: Set,
      name: {
         en: "Medicham",
         ja: "メディチャム",
         fr: "Médicham",
         de: "Medicham",
         es: "Medicham",
         it: "Medicham",
         pt: "Medicham",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [308],
      hp: 80,
      types: ["Fighting"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dual Armor",
            ja: "デュアルアーマー",
            fr: "Armure double",
            de: "Doppelpanzer",
            es: "Armadura dual",
            it: "Doppia armatura",
            pt: "Armadura dupla",
          },
          effect: {
            en: "As long as Medicham has any Psychic Energy cards attached to it, Medicham is both Psychic and Fighting type.",
            ja: "MedichamにはPsychic Energyカードが付いている限り、MedichamはPsychicと戦闘タイプの両方です。",
            fr: "Tant que Medicham a des cartes d'énergie psychique qui y sont attachées, Medicham est à la fois psychique et combattant.",
            de: "Solange Medicham irgendwelche psychischen Energiekarten befindet, ist Medicham sowohl psychisch als auch kämpfend.",
            es: "Mientras Medicham tenga alguna tarjeta de energía psíquica adjunta, Medicham es tanto psíquico como de lucha.",
            it: "Finché Medicham ha delle carte di energia psichica ad esso collegate, Medicham è sia psichico che di combattimento.",
            pt: "Enquanto Medicham possui qualquer cartões de energia psíquica anexada a ele, Medicham é o tipo psíquico e de luta.",
          },
      }],

      attacks: [
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Psyshock",
            ja: "PsyShock",
            fr: "Psychock",
            de: "Psyshock",
            es: "Psíquico",
            it: "Psyshock",
            pt: "Psyshock",
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
          damage: 20,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Sky Uppercut",
            ja: "スカイアッパーカット",
            fr: "Uppercut ciel",
            de: "Sky Uppercut",
            es: "Uppercut del cielo",
            it: "Sky Uppercut",
            pt: "Sky Uppercut",
          },
          effect: {
            en: "This attack's damage isn't affected by Resistance.",
            ja: "この攻撃の損傷は抵抗の影響を受けません。",
            fr: "Les dégâts de cette attaque ne sont pas affectés par la résistance.",
            de: "Der Schaden dieses Angriffs ist nicht durch Widerstand beeinflusst.",
            es: "El daño de este ataque no se ve afectado por la resistencia.",
            it: "Il danno di questo attacco non è influenzato dalla resistenza.",
            pt: "O dano desse ataque não é afetado pela resistência.",
          },
          damage: 50,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
