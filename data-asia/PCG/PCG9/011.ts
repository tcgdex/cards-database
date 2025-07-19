import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Swellow (Delta Species)",
         ja: "スウェロー（デルタ種）",
         fr: "Swellow (espèce delta)",
         de: "Swellow (Delta -Arten)",
         es: "Swellow (especie delta)",
         it: "Swellow (Delta Species)",
         pt: "Swellow (espécie Delta)",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [277],
      hp: 70,
      types: ["Fire"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Extra Wing",
            ja: "余分な翼",
            fr: "Aile supplémentaire",
            de: "Zusätzlicher Flügel",
            es: "Ala extra",
            it: "Ala extra",
            pt: "Asa extra",
          },
          effect: {
            en: "The Retreat Cost for each of your Stage 2 PokÃ©mon-ex is 0.",
            ja: "ステージ2Pokã©Mon-Exのそれぞれのリトリートコストは0です。",
            fr: "Le coût de retraite pour chacun de votre étape 2 Poké-MON-EX est 0.",
            de: "Die Rückzugskosten für jedes Ihrer Stufe 2 Poké Mon-EX beträgt 0.",
            es: "El costo de retirada para cada uno de sus etapas 2 Poké Mon-Ex es 0.",
            it: "Il costo di ritiro per ciascuna delle tue fase 2 Poké mon-ex è 0.",
            pt: "O custo do retiro para cada um dos seus estágios 2 Poké MON-EX é 0.",
          },
      }],

      attacks: [
        {
          cost: ["Fire", "Colorless"],
          name: {
            en: "Agility",
            ja: "敏ility性",
            fr: "Agilité",
            de: "Beweglichkeit",
            es: "Agilidad",
            it: "Agilità",
            pt: "Agilidade",
          },
          effect: {
            en: "Flip a coin. If heads, prevent all effects of an attack, including damage, done to Swellow during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にスウェローに行われたダメージを含む攻撃のすべての影響を防ぎます。",
            fr: "Retourner une pièce. Si les têtes, empêchent tous les effets d'une attaque, y compris les dégâts, faire pour échouer lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen eines Angriffs, einschließlich Schäden, die während der nächsten Runde Ihres Gegners an Swellow angerichtet wurden.",
            es: "Voltea una moneda. Si las cabezas, evitan todos los efectos de un ataque, incluido el daño, hecho a Swellow durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se le teste, impediscono tutti gli effetti di un attacco, incluso il danno, fatto su Swellow durante il turno successivo dell'avversario.",
            pt: "Vire uma moeda. Se as cabeças, impedem todos os efeitos de um ataque, incluindo danos, causados a Swellow durante o próximo turno do seu oponente.",
          },
          damage: 30,
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
