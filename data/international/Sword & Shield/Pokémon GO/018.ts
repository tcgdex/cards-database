import { Card } from "models/database/card"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [9],
	set: Set,

	name: {
		'en-us': "Radiant Blastoise",
		'fr-fr': "Tortank Radieux",
		'es-es': "Blastoise Radiante",
		'it-it': "Blastoise Lucente",
		'pt-br': "Blastoise Radiante",
		'de-de': "Strahlendes Turtok"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Radiant Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Pump Shot",
			'fr-fr': "Coup Gonflé",
			'es-es': "Disparo Bomba",
			'it-it': "Colpo Pompa",
			'pt-br': "Disparo Bombeado",
			'de-de': "Pumpschuss"
		},

		effect: {
			'en-us': "You must discard a Water Energy card from your hand in order to use this Ability. Once during your turn, you may put 2 damage counters on 1 of your opponent's Benched Pokémon.",
			'fr-fr': "Vous devez défausser une carte Énergie Water de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez placer 2 marqueurs de dégâts sur l'un des Pokémon de Banc de votre adversaire.",
			'es-es': "Debes descartar 1 carta de Energía Water de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes poner 2 contadores de daño en 1 de los Pokémon en Banca de tu rival.",
			'it-it': "Devi scartare una carta Energia Water che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi mettere due segnalini danno su uno dei Pokémon nella panchina del tuo avversario.",
			'pt-br': "Você deve descartar 1 carta de Energia Water da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá colocar 2 contadores de dano em 1 dos Pokémon no Banco do seu oponente.",
			'de-de': "Du musst 1 Water-Energiekarte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 2 Schadensmarken auf 1 Pokémon auf der Bank deines Gegners legen."
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Torrential Cannon",
			'fr-fr': "Canon Torrentiel",
			'es-es': "Cañón Torrencial",
			'it-it': "Cannone Torrenziale",
			'pt-br': "Canhão Torrencial",
			'de-de': "Sintflutkanone"
		},

		effect: {
			'en-us': "During your next turn, this Pokémon can't use Torrential Cannon.",
			'fr-fr': "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Canon Torrentiel.",
			'es-es': "Durante tu próximo turno, este Pokémon no puede usar Cañón Torrencial.",
			'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Cannone Torrenziale.",
			'pt-br': "Durante o seu próximo turno, este Pokémon não poderá usar Canhão Torrencial.",
			'de-de': "Während deines nächsten Zuges kann dieses Pokémon Sintflutkanone nicht einsetzen."
		},

		damage: 170
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "F",


	description: {
		'en-us': "It crushes its foe under its heavy body to cause fainting. In a pinch, it will withdraw inside its shell.",
	},

	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 665251,
				tcgplayer: 274468
			}
		},
	],
}

export default card
