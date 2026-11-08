import { Card } from "models/database/card"
import Set from "../Chaos Rising"

const card: Card = {
	set: Set,


	name: {
		'en-us': "AZ's Tranquility",
		'fr-fr': "Tranquillité d'A.Z.",
		'es-es': "Tranquilidad de A. Z.",
		'es-mx': "Tranquilidad de A. Z.",
		'de-de': "Azetts Gelassenheit",
		'it-it': "Tranquillità di AZ",
		'pt-br': "Tranquilidade do AZ"
	},

	illustrator: "GIDORA",
	rarity: "Uncommon",
	category: "Trainer",
	trainerType: "Supporter",
	regulationMark: "J",

	effect: {
		'en-us': "Switch your Active Pokémon with 1 of your Benched Pokémon. If you moved a Pokémon ex to your Bench in this way, heal 80 damage from that Pokémon.",
		'fr-fr': "Échangez votre Pokémon Actif contre l'un de vos Pokémon de Banc. Si vous avez déplacé un Pokémon-ex vers votre Banc de cette façon, soignez 80 dégâts de ce Pokémon-là.",
		'es-es': "Cambia tu Pokémon Activo por uno de tus Pokémon en Banca. Si has movido un Pokémon ex a tu Banca de esta manera, cura 80 puntos de daño a ese Pokémon.",
		'es-mx': "Cambia tu Pokémon Activo por 1 de tus Pokémon en Banca. Si moviste un Pokémon ex a tu Banca de esta manera, cura 80 puntos de daño a ese Pokémon.",
		'de-de': "Tausche dein Aktives Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du auf diese Weise ein Pokémon-ex auf deine Bank verschoben hast, heile 80 Schadenspunkte bei jenem Pokémon.",
		'it-it': "Scambia il tuo Pokémon attivo con uno nella tua panchina. Se hai spostato in panchina un Pokémon-ex in questo modo, cura quel Pokémon da 80 danni.",
		'pt-br': "Troque o seu Pokémon Ativo por 1 dos seus Pokémon no Banco. Se você moveu um Pokémon ex para o seu Banco desta forma, cure 80 pontos de dano daquele Pokémon."
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 886468,
				tcgplayer: 693449
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 886468,
				tcgplayer: 693449
			}
		},
	],
}

export default card
