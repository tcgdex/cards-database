import { Card } from 'models/database/card'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		'en-us': "Hydreigon EX",
		'fr-fr': "Trioxhydre EX",
		'es-es': "Hydreigon EX",
		'it-it': "Hydreigon EX",
		'pt-br': "Hydreigon EX",
		'de-de': "Trikephalo EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Dragon Road",
				'fr-fr': "Voie du Dragon",
				'es-es': "Camino de Dragón",
				'it-it': "Dragopista",
				'pt-br': "Estrada do Dragão",
				'de-de': "Drachenpfad"
			},
			effect: {
				'en-us': "If there is any Stadium card in play, the Retreat Cost of each of your Dragon Pokémon in play is ColorlessColorless less.",
				'fr-fr': "S'il y a une carte Stade en jeu, le Coût de Retraite de chacun de vos Pokémon Dragon en jeu est diminué de ColorlessColorless.",
				'es-es': "Si hay alguna carta de Estadio en juego, el Coste de Retirada de cada uno de tus Pokémon Dragon en juego es de ColorlessColorless menos.",
				'it-it': "Se c'è in gioco una carta Stadio, il costo di ritirata di ciascuno dei tuoi Pokémon Dragon è ridotto di ColorlessColorless.",
				'pt-br': "Se houver algum card de Estádio em jogo, o Custo para Recuar de cada um de seus Pokémon Dragon em jogo será de Colorless Colorless a menos.",
				'de-de': "Wenn eine Stadionkarte im Spiel ist, verringern sich die Rückzugskosten all deiner Dragon-Pokémon im Spiel um ColorlessColorless."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Shred",
				'fr-fr': "Déchiquetage",
				'es-es': "Hacer Trizas",
				'it-it': "Tritatutto",
				'pt-br': "Triturar",
				'de-de': "Zerfetzer"
			},
			effect: {
				'en-us': "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				'fr-fr': "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "Il danno di questo attacco non è influenzato da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "Os danos deste ataque não são afetados por qualquer efeito no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden dieses Angriffs wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,
	stage: "Basic",

	thirdParty: {
		cardmarket: 282730,
		tcgplayer: 98139
	}
}

export default card
