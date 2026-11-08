import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [92],
	set: Set,

	name: {
		'en-us': "Gastly",
		'fr-fr': "Fantominus",
		'es-es': "Gastly",
		'it-it': "Gastly",
		'pt-br': "Gastly",
		'de-de': "Nebulak"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Furtive Drop",
			'fr-fr': "Chute Furtive",
			'es-es': "Caída Furtiva",
			'it-it': "Lascito Furtivo",
			'pt-br': "Gota Furtiva",
			'de-de': "Hinterhältiger Fall"
		},

		effect: {
			'en-us': "Put 1 damage counter on your opponent's Active Pokémon.",
			'fr-fr': "Placez un marqueur de dégâts sur le Pokémon Actif de votre adversaire.",
			'es-es': "Pon 1 contador de daño en el Pokémon Activo de tu rival.",
			'it-it': "Metti un segnalino danno sul Pokémon attivo del tuo avversario.",
			'pt-br': "Coloque 1 contador de dano no Pokémon Ativo do seu oponente.",
			'de-de': "Lege 1 Schadensmarke auf das Aktive Pokémon deines Gegners."
		}
	}],

	retreat: 0,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674073,
				tcgplayer: 283938
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674073,
				tcgplayer: 283938
			}
		},
	],
}

export default card
