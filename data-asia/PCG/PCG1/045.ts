import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
      set: Set,
      name: {
         en: "Slowbro",
         ja: "スローブロ",
         fr: "Slowbro",
         de: "Slowbro",
         es: "Slowbro",
         it: "Slowbro",
         pt: "Slowbro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [80],
      hp: 60,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Strange Behavior",
            ja: "奇妙な行動",
            fr: "Comportement étrange",
            de: "Seltsames Verhalten",
            es: "Comportamiento extraño",
            it: "Strano comportamento",
            pt: "Comportamento estranho",
          },
          effect: {
            en: "As often as you like during your turn (before your attack), you may move 1 damage counter from 1 of your PokÃ©mon to Slowbro as long as you don't Knock Out Slowbro. This power can't be used if Slowbro is affected by a Special Condition.",
            ja: "ターン中に（攻撃前）が好きなように、スローブロをノックアウトしない限り、ポケモンの1から1ダメージカウンターをスローブロに移動できます。 Slowbroが特別な状態の影響を受ける場合、このパワーは使用できません。",
            fr: "Aussi souvent que vous le souhaitez pendant votre tour (avant votre attaque), vous pouvez déplacer 1 compteur de dégâts de 1 de votre poké à Slowbro tant que vous ne supprimez pas Slowbro. Cette puissance ne peut pas être utilisée si Slowbro est affecté par une condition spéciale.",
            de: "So oft Sie während Ihres Zuges (vor Ihrem Angriff) möchten, können Sie 1 Schadenschalter von 1 Ihrer Pokémon nach langsamer machen, solange Sie Slowbro nicht ausschalten. Diese Leistung kann nicht angewendet werden, wenn Slowbro durch einen besonderen Zustand beeinflusst wird.",
            es: "Tan a menudo como desee durante su turno (antes de su ataque), puede mover 1 contador de daño de 1 de su Poké Mon a Slowbro, siempre que no elimine a Slowbro. Esta potencia no se puede usar si SlowBro se ve afectado por una condición especial.",
            it: "Tutte le volte che desideri durante il tuo turno (prima del tuo attacco), puoi spostare 1 contatore di danni da 1 del tuo poké mon a Slowbro fintanto che non elimina Slowbro. Questa potenza non può essere utilizzata se Slowbro è influenzato da una condizione speciale.",
            pt: "Sempre que quiser durante o seu turno (antes do seu ataque), você pode mover 1 contador de danos de 1 do seu Poké Mon para Slowbro, desde que não derrube Slowbro. Esse poder não pode ser usado se o SlowBro for afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
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
          damage: 30,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
