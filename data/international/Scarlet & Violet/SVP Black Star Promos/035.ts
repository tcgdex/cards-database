import { Card } from "models/database/card"
import Set from "../SVP Black Star Promos"

const card: Card = {
	dexId: [914],
	set: Set,

	name: {
		'en-us': "Quaquaval ex",
		'fr-fr': "Palmaval-ex",
		'es-es': "Quaquaval ex",
		'it-it': "Quaquaval-ex",
		'pt-br': "Quaquaval ex",
		'de-de': "Bailonda-ex"
	},

	rarity: "Promo",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	evolveFrom: {
		'en-us': "Quaxwell",
		'fr-fr': "Canarbello",
		'es-es': "Quaxwell",
		'it-it': "Quaxwell",
		'pt-br': "Quaxwell",
		'de-de': "Fuentente"
	},
	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			'en-us': "Exciting Dance",
			'fr-fr': "Danse Palpitante",
			'es-es': "Baile Apasionante",
			'it-it': "Danza Coinvolgente",
			'pt-br': "Samba Empolgante",
			'de-de': "Mitreißender Tanz"
		},

		effect: {
			'en-us': "Switch this Pokémon with 1 of your Benched Pokémon. If you do, switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			'fr-fr': "Échangez ce Pokémon contre l'un de vos Pokémon de Banc. Dans ce cas, envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			'es-es': "Cambia este Pokémon por uno de tus Pokémon en Banca. Si lo haces, mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'it-it': "Scambia questo Pokémon con uno della tua panchina. Se lo fai, sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			'pt-br': "Troque este Pokémon por 1 dos seus Pokémon no Banco. Se fizer isto, mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)",
			'de-de': "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. Wenn du das machst, wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)"
		},

		damage: 60
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Spiral Shot",
			'fr-fr': "Tir en Spirale",
			'es-es': "Lanzamiento en Espiral",
			'it-it': "Spiralcolpo",
			'pt-br': "Disparo Espiral",
			'de-de': "Spiralschuss"
		},

		effect: {
			'en-us': "Put 2 Energy attached to this Pokémon into your hand.",
			'fr-fr': "Ajoutez à votre main 2 Énergies attachées à ce Pokémon.",
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
	suffix: "ex",
	illustrator: "5ban Graphics",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 720131,
				tcgplayer: 513874
			},
		}
	],
}

export default card
