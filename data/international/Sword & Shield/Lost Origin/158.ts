import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Iscan",
		'fr-fr': "Graham",
		'es-es': "Erio",
		'it-it': "Sinen",
		'pt-br': "Miscano",
		'de-de': "Susuki"
	},

	illustrator: "Akira Komayama",
	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		'en-us': "Draw 2 cards. If your Active Pokémon has \"Hisuian\" in its name, draw 2 more cards.",
		'fr-fr': "Piochez 2 cartes. Si votre Pokémon Actif a \" de Hisui \" dans son nom, piochez 2 cartes supplémentaires.",
		'es-es': "Roba 2 cartas. Si tu Pokémon Activo tiene \"de Hisui\" en su nombre, roba 2 cartas más.",
		'it-it': "Pesca due carte. Se il tuo Pokémon attivo ha \"di Hisui\" nel nome, pesca altre due carte.",
		'pt-br': "Compre 2 cartas. Se o seu Pokémon Ativo tiver \"de Hisui\" em seu nome, compre 2 cartas a mais.",
		'de-de': "Ziehe 2 Karten. Wenn bei deinem Aktiven Pokémon \"Hisui\" zum Namen gehört, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674166,
				tcgplayer: 284089
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674166,
				tcgplayer: 284089
			}
		},
	],
}

export default card
