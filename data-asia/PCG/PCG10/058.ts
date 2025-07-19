import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
      set: Set,
      name: {
         en: "Sharpedo",
         ja: "シャルデド",
         fr: "Acier",
         de: "Sharpedo",
         es: "Agudo",
         it: "Sharpedo",
         pt: "Sharped",
      },


      category: "Pokemon",
      dexId: [319],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Tight Jaw",
            ja: "タイトな顎",
            fr: "Mâchoire serrée",
            de: "Enger Kiefer",
            es: "Mandíbula",
            it: "Mascella stretta",
            pt: "Mandíbula apertada",
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
          cost: ["Darkness", "Colorless", "Colorless"],
          name: {
            en: "Darkness Charge",
            ja: "闇の充電",
            fr: "Charge d'obscurité",
            de: "Dunkelungsgebühr",
            es: "Carga de oscuridad",
            it: "Accusa di oscurità",
            pt: "Darkness Charge",
          },
          effect: {
            en: "Put 1 damage counter on Sharpedo.",
            ja: "Sharpedoに1つのダメージカウンターを置きます。",
            fr: "Mettez 1 compteur de dégâts sur Sharpedo.",
            de: "Legen Sie einen Schadenschalter auf Sharpedo.",
            es: "Pon 1 mostrador de daño en Sharpedo.",
            it: "Put 1 damage counter on Sharpedo.",
            pt: "Coloque 1 contador de danos no Sharped.",
          },
          damage: 50,
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
