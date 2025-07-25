import {Card} from "../../../interfaces"
import Set from "../PCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Vibrava",
         ja: "ビブラバ",
         fr: "Vibrava",
         de: "Vibrava",
         es: "Vibrava",
         it: "Vibrava",
         pt: "Vibrava",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [329],
      hp: 80,
      types: ["Colorless"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Supersonic",
            ja: "超音速",
            fr: "Supersonique",
            de: "Überschall",
            es: "Supersónico",
            it: "Supersonico",
            pt: "Supersônico",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
        },
        {
          cost: ["Colorless", "Colorless"],
          name: {
            en: "Bi-Blast",
            ja: "バイブラスト",
            fr: "Biflastique",
            de: "Bi-Blast",
            es: "Biel-desgaste",
            it: "Bi-Blast",
            pt: "Bi-Blast",
          },
          effect: {
            en: "If Vibrava has any React Energy cards attached to it, this attack does 20 damage plus 20 more damage.",
            ja: "VibravaにReact Energy Cardが接続されている場合、この攻撃は20ダメージに20ダメージを与えます。",
            fr: "Si Vibrava a des cartes d'énergie de réaction qui y sont attachées, cette attaque fait 20 dégâts plus 20 dégâts supplémentaires.",
            de: "Wenn Vibrava an diesem Angriff einen React -Energiekarten befestigt ist, verursacht dieser Angriff 20 Schäden plus 20 weitere Schäden.",
            es: "Si Vibrava tiene alguna tarjetas de energía reaccionadas unidas, este ataque hace 20 daños más 20 más de daño.",
            it: "Se Vibrava ha delle carte di energia react ad esso collegate, questo attacco infligge 20 danni più 20 danni.",
            pt: "Se o Vibrava tiver algum cartão de energia do React ligado a ele, esse ataque causará 20 danos mais 20 danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
  type: "normal",
  subtype: 'unlimited",
}
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
