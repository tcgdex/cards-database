import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Iscan",
		fr: "Graham",
		es: "Erio",
		it: "Sinen",
		pt: "Miscano",
		de: "Susuki"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "Draw 2 cards. If your Active Pokémon has \"Hisuian\" in its name, draw 2 more cards.",
		fr: "Piochez 2 cartes. Si votre Pokémon Actif a \" de Hisui \" dans son nom, piochez 2 cartes supplémentaires.",
		es: "Roba 2 cartas. Si tu Pokémon Activo tiene \"de Hisui\" en su nombre, roba 2 cartas más.",
		it: "Pesca due carte. Se il tuo Pokémon attivo ha \"di Hisui\" nel nome, pesca altre due carte.",
		pt: "Compre 2 cartas. Se o seu Pokémon Ativo tiver \"de Hisui\" em seu nome, compre 2 cartas a mais.",
		de: "Ziehe 2 Karten. Wenn bei deinem Aktiven Pokémon \"Hisui\" zum Namen gehört, ziehe 2 Karten mehr."
	},

	trainerType: "Supporter",
	regulationMark: "F",

	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card