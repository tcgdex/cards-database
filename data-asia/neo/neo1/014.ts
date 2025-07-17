import {Card} from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
      set: Set,
      name: {
         en: "Meganium",
         ja: "ミーガニウム",
         fr: "Méganium",
         de: "Meganium",
         es: "Meganio",
         it: "Meganium",
         pt: "Meganium",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [154],
      hp: 100,
      types: ["Grass"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Wild Growth",
            ja: "野生の成長",
            fr: "Croissance sauvage",
            de: "Wildes Wachstum",
            es: "Crecimiento salvaje",
            it: "Crescita selvaggia",
            pt: "Crescimento selvagem",
          },
          effect: {
            en: "As long as Meganium is in play, each Grass Energy card attached to your Grass Pokmon instead provides GrassGrass. This power stops working while Meganium is Asleep, Confused, or Paralyzed.",
            ja: "ミーガニウムが機能している限り、草のポケモンに取り付けられた各草のエネルギーカードは代わりに草を草にします。このパワーは、ミーガニウムが眠っている、混乱し、麻痺している間に機能しなくなります。",
            fr: "Tant que Meganium est en jeu, chaque carte d'énergie de l'herbe attachée à votre pokemon de l'herbe fournit à la place de l'herbe. Ce pouvoir cesse de fonctionner pendant que Meganium est endormi, confus ou paralysé.",
            de: "Solange Meganium im Spiel ist, bietet jede an Ihrem Graspokémon befestigte Grasergiekarte Grasgras. Diese Kraft hört auf, während Meganium schläft, verwirrt oder gelähmt ist.",
            es: "Mientras Meganium esté en juego, cada tarjeta de energía de hierba unida a su Pokémon de hierba en su lugar proporciona hierba de hierba. Este poder deja de funcionar mientras Meganium está dormido, confundido o paralizado.",
            it: "Finché il meganium è in gioco, ogni carta di energia dell'erba attaccata al tuo Pokemon di erba fornisce invece erba. Questo potere smette di funzionare mentre Meganium dorme, confuso o paralizzato.",
            pt: "Enquanto o meganium estiver em jogo, cada carta de energia da grama presa ao seu Pokémon de grama fornece grama de grama. Esse poder para de funcionar enquanto Meganium está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass", "Grass", "Grass"],
          name: {
            en: "Soothing Scent",
            ja: "なだめるような香り",
            fr: "Parfum apaisant",
            de: "Beruhigender Duft",
            es: "Aroma relajante",
            it: "Profumo rilassante",
            pt: "Perfume calmante",
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
          damage: 40,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
