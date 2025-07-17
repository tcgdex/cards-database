import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Gyarados",
         ja: "暗いギャラドス",
         fr: "Gyarados sombres",
         de: "Dunkler Gyarados",
         es: "Gyarados oscuros",
         it: "Gyarados scuro",
         pt: "Gyarados escuro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [130],
      hp: 70,
      types: ["Water"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Final Beam",
            ja: "最終的なビーム",
            fr: "Poutre finale",
            de: "Endstrahl",
            es: "Haz final",
            it: "Raggio finale",
            pt: "Feixe final",
          },
          effect: {
            en: "When Dark Gyarados is Knocked Out by an attack, flip a coin. If heads, this power does 20 damage for each Water Energy attached to Dark Gyarados to the Pokmon that Knocked Out Dark Gyarados. Apply Weakness and Resistance. This power doesn't work if Dark Gyarados is Asleep, Confused, or Paralyzed.",
            ja: "暗いギャラドスが攻撃によってノックアウトされたら、コインをひっくり返します。頭の場合、このパワーは、暗いギャラドスに暗いギャラドスに付着した水エネルギーごとに20のダメージを与えます。衰弱と抵抗を適用します。暗いギャラドスが眠っている、混乱し、麻痺している場合、このパワーは機能しません。",
            fr: "Lorsque Dark Gyarados est assommé par une attaque, retournez une pièce. Si les têtes, cette puissance fait 20 dégâts pour chaque énergie d'eau attachée aux gyarados sombres au pokmon qui a éliminé les gyarados sombres. Appliquer une faiblesse et une résistance. Ce pouvoir ne fonctionne pas si les gyarados sombres sont endormis, confus ou paralysés.",
            de: "Wenn dunkler Gyarados durch einen Angriff ausgeschaltet wird, drehen Sie eine Münze. Wenn Köpfe, verursacht diese Kraft 20 Schäden für jede Wasserergie, die an dunklen Gyarados an dem Pokmon angebracht ist, das dunkle Gyarados ausbrach. Schwäche und Widerstand auftragen. Diese Kraft funktioniert nicht, wenn dunkle Gyarados schläft, verwirrt oder gelähmt ist.",
            es: "Cuando Dark Gyarados es noqueado por un ataque, voltea una moneda. Si se dirige, esta potencia hace 20 daños por cada energía de agua unida a los gyarados oscuros al Pokmon que noqueó a Gyarados oscuros. Aplicar debilidad y resistencia. Este poder no funciona si Gyarados oscuros está dormido, confundido o paralizado.",
            it: "Quando Gyarados scuro viene eliminato da un attacco, capovolgi una moneta. Se la testa, questa potenza infligge 20 danni per ogni energia idrica attaccata ai gyarados scuri ai Pokmon che hanno eliminato Gyarados scuri. Applicare debolezza e resistenza. Questo potere non funziona se Gyarados scuro è addormentato, confuso o paralizzato.",
            pt: "Quando os gyarados escuros são nocauteados por um ataque, vire uma moeda. Se as cabeças, esse poder causa 20 de dano para cada energia da água presa a gyarados escuro ao Pokmon que nocauteou os gyarados escuros. Aplique fraqueza e resistência. Esse poder não funciona se os gyarados escuros estão dormindo, confusos ou paralisados.",
          },
      }],

      attacks: [
        {
          cost: ["Water", "Water", "Water"],
          name: {
            en: "Ice Beam",
            ja: "アイスビーム",
            fr: "Faisceau de glace",
            de: "Eisstrahl",
            es: "Haz de hielo",
            it: "Raggio di ghiaccio",
            pt: "Feixe de gelo",
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

      retreat: 2,

      variants: [
        {
          type: "holo",
          subtype: "unlimited",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
