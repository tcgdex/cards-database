import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Vulpix",
         ja: "Vulpix",
         fr: "Vulpix",
         de: "Vulpix",
         es: "Vulpix",
         it: "Vulpix",
         pt: "Vulpix",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [37],
      hp: 50,
      types: ["Fire"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Fire", "Fire"],
          name: {
            en: "Foxfire",
            ja: "foxfire",
            fr: "Fox",
            de: "Fuchsfeuer",
            es: "Fogido",
            it: "Foxfire",
            pt: "Foxfire",
          },
          effect: {
            en: "Before doing damage, you may switch the Defending Pokemon with 1 of your opponent's Benched Pokemon.",
            ja: "ダメージを与える前に、対戦相手のベンチ付きポケモンの1つで防御ポケモンを切り替えることができます。",
            fr: "Avant de faire des dégâts, vous pouvez changer le Pokémon en défense avec l'un des pokemon bancés de votre adversaire.",
            de: "Bevor Sie Schaden anrichten, können Sie das verteidigende Pokémon mit einem der pokémon Ihres Gegners umschalten.",
            es: "Antes de hacer daño, puede cambiar el Pokémon defensor con 1 de los Pokémon de banca de tu oponente.",
            it: "Prima di fare danni, è possibile cambiare il Pokemon in carica con 1 Pokemon in panchina del tuo avversario.",
            pt: "Antes de causar danos, você pode trocar o Pokémon em defesa com 1 dos Pokémon com bancada do seu oponente.",
          },
          damage: 10,
        },
      ],

      retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
