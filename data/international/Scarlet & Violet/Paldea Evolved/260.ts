import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [914],
	set: Set,

	name: {
		'fr-fr': "Palmaval-ex",
		'en-us': "Quaquaval ex",
		'es-es': "Quaquaval ex",
		'it-it': "Quaquaval-ex",
		'pt-br': "Quaquaval ex",
		'de-de': "Bailonda-ex"
	},

	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	evolveFrom: {
		'fr-fr': "Canarbello",
		'en-us': "Quaxwell",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'fr-fr': "Danse Palpitante",
			'en-us': "Exciting Dance",
			'es-es': "Baile Apasionante",
			'it-it': "Danza Coinvolgente",
			'pt-br': "Samba Empolgante",
			'de-de': "Mitreißender Tanz"
		},

		effect: {
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'fr-fr': "Tir en Spirale",
			'en-us': "Spiral Shot",
			'es-es': "Lanzamiento en Espiral",
			'it-it': "Spiralcolpo",
			'pt-br': "Disparo Espiral",
			'de-de': "Spiralschuss"
		},

		effect: {
			'fr-fr': "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
			'en-us': "Put 2 Energy attached to this Pokémon into your hand.",
			'es-es': "Pon 2 Energías unidas a este Pokémon en tu mano.",
			'it-it': "Prendi due Energie assegnate a questo Pokémon e aggiungile alle carte che hai in mano.",
			'pt-br': "Coloque 2 Energias ligadas a este Pokémon na sua mão.",
			'de-de': "Nimm 2 an dieses Pokémon angelegte Energien auf deine Hand."
		},

		damage: 230
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715735,
				tcgplayer: 497679,
				cardtrader: 248912
			}
		},
	],

	suffix: "ex",
	illustrator: "Souichirou Gunjima",

	
}

export default card
