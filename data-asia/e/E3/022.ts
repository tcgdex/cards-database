import {Card} from "../../../interfaces"
import Set from "../E3"

const card: Card = {
      set: Set,
      name: {
         en: "Ninetales - 022/087",
         ja: "Ninetales -022/087",
         fr: "Ninetales - 022/087",
         de: "Ninetales - 022/087",
         es: "Ninetales - 022/087",
         it: "NINETALES - 022/087",
         pt: "NineTales - 022/087",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [38],
      hp: 80,
      types: ["Fire"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Fire"],
          name: {
            en: "Miracle Tail",
            ja: "奇跡の尾",
            fr: "Queue miracle",
            de: "Wunderschwanz",
            es: "Cola milagrosa",
            it: "Miracle Tail",
            pt: "Tail milagroso",
          },
          effect: {
            en: "Flip a coin. If heads, choose a Special Condition (Asleep, Burned, Confused, Paralyzed, or Poisoned). The Defending Pokemon is now affected by that Special Condition.",
            ja: "コインをひっくり返します。頭の場合は、特別な状態を選択します（眠り、燃やし、混乱し、麻痺し、毒されます）。防御ポケモンは現在、その特別な状態の影響を受けています。",
            fr: "Retourner une pièce. Si les têtes, choisissez une condition spéciale (endormie, brûlée, confuse, paralysée ou empoisonnée). Le Pokémon en défense est désormais affecté par cette condition spéciale.",
            de: "Eine Münze drehen. Wenn Köpfe, wählen Sie einen besonderen Zustand (schlafend, verbrannt, verwirrt, gelähmt oder vergiftet). Das verteidigende Pokémon ist jetzt von dieser besonderen Erkrankung betroffen.",
            es: "Voltea una moneda. Si se dirige, elija una condición especial (dormida, quemada, confundida, paralizada o envenenada). El Pokémon defensor ahora se ve afectado por esa condición especial.",
            it: "Capovolgi una moneta. Se le teste, scegli una condizione speciale (addormentata, bruciata, confusa, paralizzata o avvelenata). Il Pokemon in carica è ora influenzato da quella condizione speciale.",
            pt: "Vire uma moeda. Se as cabeças, escolha uma condição especial (adormecida, queimada, confusa, paralisada ou envenenada). O Pokémon atual agora é afetado por essa condição especial.",
          },
          damage: 10,
        },
        {
          cost: ["Fire", "Colorless", "Colorless"],
          name: {
            en: "Roasting Heat",
            ja: "焙煎熱",
            fr: "Chaleur à torréfaction",
            de: "Röstenhitze",
            es: "Calor de asado",
            it: "Calore arrosto",
            pt: "Calor assado",
          },
          effect: {
            en: "If the Defending Pokemon is Burned, this attack does 40 damage plus 20 more damage.",
            ja: "防御ポケモンが燃やされた場合、この攻撃は40ダメージに加えて20ダメージを与えます。",
            fr: "Si le Pokémon en défense est brûlé, cette attaque fait 40 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn das verteidigende Pokémon verbrannt wird, verursacht dieser Angriff 40 Schaden zuzüglich 20 weitere Schäden.",
            es: "Si se quema el Pokémon defensor, este ataque hace 40 daños más 20 más de daño.",
            it: "Se il Pokemon in carica viene bruciato, questo attacco infligge 40 danni più 20 danni.",
            pt: "Se o pokemon atual for queimado, esse ataque causará 40 danos mais 20 mais danos.",
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
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
