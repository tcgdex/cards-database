import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Silvally",
		fr: "Silvallié",
		es: "Silvally",
		it: "Silvally",
		pt: "Silvally",
		de: "Amigento"
	},
	illustrator: "Eske Yoshinob",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		773,
	],
	hp: 130,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Type: Null",
		fr: "Type:0",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Avenging Heart",
				fr: "Cœur Vengeur",
				es: "Corazón Vengador",
				it: "Cuore Vendicativo",
				pt: "Coração Vingativo",
				de: "Racheherz"
			},
			effect: {
				en: "This attack does 50 more damage for each Prize card your opponent took on their last turn.",
				fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque carte Récompense que votre adversaire a récupérée lors de son dernier tour.",
				es: "Este ataque hace 50 puntos de daño más por cada carta de Premio que haya cogido tu rival en su último turno.",
				it: "Questo attacco infligge 50 danni in più per ogni carta Premio presa dal tuo avversario nel suo ultimo turno.",
				pt: "Este ataque causa 50 pontos de dano a mais para cada carta de Prêmio que seu oponente pegou na última vez dele(a) jogar.",
				de: "Diese Attacke fügt 50 Schadenspunkte mehr mal der Anzahl der Preiskarten zu, die dein Gegner während seines letzten Zuges genommen hat."
			},
			damage: "30+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Air Slash",
				fr: "Lame d’Air",
				es: "Tajo Aéreo",
				it: "Eterelama",
				pt: "Golpe de Ar",
				de: "Luftschnitt"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 120,

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
