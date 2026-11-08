import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [62],
	set: Set,

	name: {
		'en-us': "Poliwrath",
		'fr-fr': "Tartard",
		'es-es': "Poliwrath",
		'it-it': "Poliwrath",
		'pt-br': "Poliwrath",
		'de-de': "Quappo"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Poliwhirl",
		'fr-fr': "Têtarte",
		'es-es': "Poliwhirl",
		'it-it': "Poliwhirl",
		'pt-br': "Poliwhirl",
		'de-de': "Quaputzi"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Split Spiral Punch",
			'fr-fr': "Coup d'Poing en Demi Spirale",
			'es-es': "Puño en Espiral Cortante",
			'it-it': "Spiralpugno Squarciante",
			'pt-br': "Soco Espiral Dividido",
			'de-de': "Spiralhieb"
		},

		effect: {
			'en-us': "Your opponent's Active Pokémon is now Confused.",
			'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			'es-es': "El Pokémon Activo de tu rival pasa a estar Confundido.",
			'it-it': "Il Pokémon attivo del tuo avversario viene confuso.",
			'pt-br': "O Pokémon Ativo do seu oponente agora está Confuso.",
			'de-de': "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			'en-us': "Splash Loop",
			'fr-fr': "Boucle Éclaboussure",
			'es-es': "Bucle Salpicadura",
			'it-it': "Circuito Splash",
			'pt-br': "Borrifada em Loop",
			'de-de': "Platscherschleife"
		},

		effect: {
			'en-us': "Put 2 Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
			'es-es': "Pon 2 Energías unidas a este Pokémon en tu mano.",
			'it-it': "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
		},

		damage: 160
	}],

	retreat: 2,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674098,
				tcgplayer: 283970
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674098,
				tcgplayer: 283970
			}
		},
	],
}

export default card
