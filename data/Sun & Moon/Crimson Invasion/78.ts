import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Miltank",
		fr: "Écrémeuh",
		es: "Miltank",
		it: "Miltank",
		pt: "Miltank",
		de: "Miltank"
	},
	illustrator: "Mina Nakai",
	rarity: "Uncommon",
	category: "Pokemon",

	set: Set,
	dexId: [
		241,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Moomoo Malt",
				fr: "Milk-Shake Meumeu",
				es: "Batido Mu-mu",
				it: "Malto Mumu",
				pt: "Malte de Moomoo",
				de: "Kuhmuh-Malz"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, whenever you attach an Energy card from your hand to 1 of your Pokémon, heal 90 damage from that Pokémon.",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, chaque fois que vous attachez une carte Énergie de votre main à l’un de vos Pokémon, soignez 90 dégâts à ce Pokémon.",
				es: "Mientras este Pokémon sea tu Pokémon Activo, cada vez que unas 1 carta de Energía de tu mano a 1 de tus Pokémon, cura 90 puntos de daño a ese Pokémon.",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, ogni volta che assegni a uno dei tuoi Pokémon una carta Energia dalla tua mano, cura quel Pokémon da 90 danni.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, sempre que ligar 1 carta de Energia da sua mão a 1 dos seus Pokémon, cure 90 pontos de dano daquele Pokémon.",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, heile jedes Mal, wenn du 1 Energiekarte aus deiner Hand an 1 deiner Pokémon anlegst, 90 Schadenspunkte bei jenem Pokémon."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Sitdown Splash",
				fr: "Grosse Éclaboussure",
				es: "Chapoteo Sentado",
				it: "Sedutasplash",
				pt: "Respingo Arriante",
				de: "Platzierter Platscher"
			},
			effect: {
				en: "Flip a coin. If heads, this attack does 30 more damage.",
				fr: "Lancez une pièce. Si c’est face, cette attaque inflige 30 dégâts supplémentaires.",
				es: "Lanza 1 moneda. Si sale cara, este ataque hace 30 puntos de daño más.",
				it: "Lancia una moneta. Se esce testa, questo attacco infligge 30 danni in più.",
				pt: "Jogue 1 moeda. Se sair cara, este ataque causará 30 pontos de dano a mais.",
				de: "Wirf 1 Münze. Bei Kopf fügt diese Attacke 30 Schadenspunkte mehr zu."
			},
			damage: "60+",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
