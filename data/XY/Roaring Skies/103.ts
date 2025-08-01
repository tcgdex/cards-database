import { Card } from '../../../interfaces'
import Set from '../Roaring Skies'

const card: Card = {
	name: {
		en: "Hydreigon EX",
		fr: "Trioxhydre EX",
		es: "Hydreigon EX",
		it: "Hydreigon EX",
		pt: "Hydreigon EX",
		de: "Trikephalo EX"
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
				en: "Dragon Road",
				fr: "Voie du Dragon",
				es: "Camino de Dragón",
				it: "Dragopista",
				pt: "Estrada do Dragão",
				de: "Drachenpfad"
			},
			effect: {
				en: "If there is any Stadium card in play, the Retreat Cost of each of your Dragon Pokémon in play is ColorlessColorless less.",
				fr: "S'il y a une carte Stade en jeu, le Coût de Retraite de chacun de vos Pokémon Dragon en jeu est diminué de ColorlessColorless.",
				es: "Si hay alguna carta de Estadio en juego, el Coste de Retirada de cada uno de tus Pokémon Dragon en juego es de ColorlessColorless menos.",
				it: "Se c'è in gioco una carta Stadio, il costo di ritirata di ciascuno dei tuoi Pokémon Dragon è ridotto di ColorlessColorless.",
				pt: "Se houver algum card de Estádio em jogo, o Custo para Recuar de cada um de seus Pokémon Dragon em jogo será de Colorless Colorless a menos.",
				de: "Wenn eine Stadionkarte im Spiel ist, verringern sich die Rückzugskosten all deiner Dragon-Pokémon im Spiel um ColorlessColorless."
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
				en: "Shred",
				fr: "Déchiquetage",
				es: "Hacer Trizas",
				it: "Tritatutto",
				pt: "Triturar",
				de: "Zerfetzer"
			},
			effect: {
				en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "Il danno di questo attacco non è influenzato da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "Os danos deste ataque não são afetados por qualquer efeito no Pokémon Ativo do seu oponente.",
				de: "Der Schaden dieses Angriffs wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
		cardmarket: 282730
	}
}

export default card
