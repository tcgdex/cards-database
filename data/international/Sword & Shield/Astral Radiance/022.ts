import { Card } from "models/database/card"
import Set from "../Astral Radiance"

const card: Card = {
	dexId: [78],
	set: Set,

	name: {
		'en-us': "Rapidash",
		'fr-fr': "Galopa",
		'es-es': "Rapidash",
		'it-it': "Rapidash",
		'pt-br': "Rapidash",
		'de-de': "Gallopa"
	},

	illustrator: "Ligton",
	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		'en-us': "Ponyta",
		'fr-fr': "Ponyta",
		'es-es': "Ponyta",
		'it-it': "Ponyta",
		'pt-br': "Ponyta",
		'de-de': "Ponita"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			'en-us': "Combustion",
			'fr-fr': "Fournaise",
			'es-es': "Combustión",
			'it-it': "Fuoco Continuo",
			'pt-br': "Combustão",
			'de-de': "Glühen"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			'en-us': "Ring of Fire",
			'fr-fr': "Anneau de Feu",
			'es-es': "Anillo de Fuego",
			'it-it': "Anello di Fuoco",
			'pt-br': "Anel de Fogo",
			'de-de': "Feuerring"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Burned. During your opponent's next turn, that Pokémon can't retreat.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Brûlé. Pendant le prochain tour de votre adversaire, ce Pokémon-là ne peut pas battre en retraite.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Quemado. Durante el próximo turno de tu rival, ese Pokémon no puede retirarse.",
			'it-it': "Il Pokémon attivo del tuo avversario viene bruciato. Durante il prossimo turno del tuo avversario, quel Pokémon non può ritirarsi.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Queimado. Durante o próximo turno do seu oponente, aquele Pokémon não poderá recuar.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verbrannt. Während des nächsten Zuges deines Gegners kann sich jenes Pokémon nicht zurückziehen."
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "This Pokémon can be seen galloping through fields at speeds of up to 150 mph, its fiery mane fluttering in the wind.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 658521,
				tcgplayer: 272222
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 658521,
				tcgplayer: 272222
			}
		},
	],
}

export default card
