import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Haunter",
         ja: "ハンター",
         fr: "Hancher",
         de: "Haunter",
         es: "Perseguidor",
         it: "Haunter",
         pt: "Assombro",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [93],
      hp: 50,
      types: ["Psychic"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Transparency",
            ja: "透明性",
            fr: "Transparence",
            de: "Transparenz",
            es: "Transparencia",
            it: "Trasparenza",
            pt: "Transparência",
          },
          effect: {
            en: "Whenever an attack does anything to Haunter, flip a coin. If heads, prevent all effects of that attack, including damage, done to Haunter. This power stops working while Haunter is affected by a Special Condition.",
            ja: "攻撃がハンターに何かをするときはいつでも、コインをひっくり返します。頭の場合は、ダメージを含む、その攻撃のすべての影響をhaunterに行うことを防ぎます。このパワーは機能しなくなり、ハンターは特別な状態の影響を受けます。",
            fr: "Chaque fois qu'une attaque fait quoi que ce soit à handicler, retournez une pièce. Si les têtes, empêchent tous les effets de cette attaque, y compris les dégâts, faites à Haunter. Cette puissance cesse de fonctionner tandis que Haunter est affecté par une condition spéciale.",
            de: "Immer wenn ein Angriff etwas macht, um zu hüpfen, drehen Sie eine Münze. Wenn Sie Köpfe sind, verhindern Sie alle Auswirkungen dieses Angriffs, einschließlich Schäden, die Haunter angerichtet haben. Diese Kraft hört auf zu funktionieren, während Haunter von einem besonderen Zustand betroffen ist.",
            es: "Cada vez que un ataque hace algo para perseguir, voltea una moneda. Si las cabezas, evitan todos los efectos de ese ataque, incluido el daño, se hacen a Hunter. Esta potencia deja de funcionar mientras Haunter se ve afectado por una condición especial.",
            it: "Ogni volta che un attacco fa qualcosa da Haunter, capovolgi una moneta. Se le teste, impediscono tutti gli effetti di quell'attacco, incluso il danno, fatto a Haunter. Questo potere smette di funzionare mentre Haunter è influenzato da una condizione speciale.",
            pt: "Sempre que um ataque faz qualquer coisa para assombrar, vire uma moeda. Se as cabeças, impedem todos os efeitos desse ataque, incluindo danos, causados a Haunter. Esse poder para de funcionar enquanto Haunter é afetado por uma condição especial.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless"],
          name: {
            en: "Nightmare",
            ja: "悪夢",
            fr: "Cauchemar",
            de: "Alptraum",
            es: "Pesadilla",
            it: "Incubo",
            pt: "Pesadelo",
          },
          effect: {
            en: "The Defending Pokemon is now Asleep.",
            ja: "防御ポケモンは今眠っています。",
            fr: "Le Pokémon en défense est maintenant endormi.",
            de: "Das verteidigende Pokemon schläft jetzt.",
            es: "El Pokémon defensor ahora está dormido.",
            it: "Il Pokemon in carica è ora addormentato.",
            pt: "O Pokémon atual está agora dormindo.",
          },
          damage: 10,
        },
      ],


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
