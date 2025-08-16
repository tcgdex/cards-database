import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Giovanni's Nidorina",
         ja: "ジョバンニのニドリーナ",
         fr: "Nidorina de Giovanni",
         de: "Giovannis Nidorina",
         es: "Nidorina de Giovanni",
         it: "Giovanni's Nidorina",
         pt: "Nidorina de Giovanni",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [30],
      hp: 80,
      types: ["Grass"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Poison Sting Tackle",
            ja: "ポイズンスティングタックル",
            fr: "Tacle de piqûre de poison",
            de: "Giftstich Tackle",
            es: "Tackle de aguijón venenoso",
            it: "Attrezzatura di puntura velenosa",
            pt: "Equipamento de picada de veneno",
          },
          effect: {
            en: "Giovanni's Nidorina does 20 damage to itself. Flip a coin. If heads, the Defending Pokemon is now Poisoned.",
            ja: "GiovanniのNidorinaはそれ自体に20のダメージを与えます。コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
            fr: "Le Nidorina de Giovanni fait 20 dégâts à lui-même. Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant empoisonné.",
            de: "Giovannis Nidorina schädigt sich 20. Eine Münze drehen. Wenn Köpfe, ist das verteidigende Pokemon jetzt vergiftet.",
            es: "Nidorina de Giovanni hace 20 daños a sí mismo. Voltea una moneda. Si se dirige, el Pokémon defensor ahora está envenenado.",
            it: "La Nidorina di Giovanni fa 20 danni a se stessa. Capovolgi una moneta. Se la testa, il Pokemon in carica è ora avvelenato.",
            pt: "Nidorina, de Giovanni, causa 20 danos a si mesmo. Vire uma moeda. Se as cabeças, o pokemon atual agora está envenenado.",
          },
          damage: 30,
        },
        {
          cost: ["Grass", "Colorless", "Colorless"],
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
          damage: 20,
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
