import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [244],
	set: Set,

	name: {
		'en-us': "Entei",
		'fr-fr': "Entei",
		'es-es': "Entei",
		'it-it': "Entei",
		'pt-br': "Entei",
		'de-de': "Entei"
	},

	illustrator: "Nisota Niso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Explosive Heat Dash",
			'fr-fr': "Ruée Chaleur Explosive",
			'es-es': "Carga Ardiente Explosiva",
			'it-it': "Rogoscatto Esplosivo",
			'pt-br': "Arremetida de Calor Explosiva",
			'de-de': "Explosiver Hitzespurt"
		},

		effect: {
			'en-us': "If this Pokémon has any Fire Energy attached, it has no Retreat Cost.",
			'fr-fr': "Si au moins une Énergie Fire est attachée à ce Pokémon, il n'a pas de Coût de Retraite.",
			'es-es': "Si este Pokémon tiene alguna Energía Fire unida a él, no tiene ningún Coste de Retirada.",
			'it-it': "Se questo Pokémon ha delle Energie Fire assegnate, non ha costo di ritirata.",
			'pt-br': "Se este Pokémon tiver alguma Energia Fire ligada a ele, não terá custo de Recuo.",
			'de-de': "Wenn an dieses Pokémon mindestens 1 Fire-Energie angelegt ist, hat es keine Rückzugskosten."
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'en-us': "Claw Slash",
			'fr-fr': "Tranch'Griffe",
			'es-es': "Cuchillada Garra",
			'it-it': "Lacerartiglio",
			'pt-br': "Golpe de Garra",
			'de-de': "Klauenschlitzer"
		},

		damage: 90
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It is said that when it roars, a volcano erupts somewhere around the globe.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 691738,
				tcgplayer: 478105
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691738,
				tcgplayer: 478105
			}
		},
	],
}

export default card
