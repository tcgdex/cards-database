import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Spiritomb",
		fr: "Spiritomb",
		es: "Spiritomb",
		it: "Spiritomb",
		pt: "Spiritomb",
		de: "Kryppuk"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		442,
	],

	hp: 60,

	types: [
		"Darkness",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Building Spite",
				fr: "Mépris Grandissant",
				es: "Rencor Creciente",
				it: "Accumulo Dispettoso",
				pt: "Acumular Rancor",
				de: "Racheaufbau"
			},
			effect: {
				en: "Once during your turn (before your attack), you may put 1 damage counter on this Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer un marqueur de dégâts sur ce Pokémon.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes poner 1 contador de daño en este Pokémon.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi mettere un segnalino danno su questo Pokémon.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode colocar 1 contador de dano neste Pokémon.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Schadensmarke auf dieses Pokémon legen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				en: "Anguish Cry",
				fr: "Cri Angoissé",
				es: "Grito de Angustia",
				it: "Grida di Tormento",
				pt: "Grito Angustiante",
				de: "Angstschrei"
			},
			effect: {
				en: "This attack does 30 more damage for each damage counter on this Pokémon.",
				fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque marqueur de dégâts placé sur ce Pokémon.",
				es: "Este ataque hace 30 puntos de daño más por cada contador de daño en este Pokémon.",
				it: "Questo attacco infligge 30 danni in più per ogni segnalino danno presente su questo Pokémon.",
				pt: "Este ataque causa 30 pontos de dano a mais para cada contador de dano neste Pokémon.",
				de: "Diese Attacke fügt 30 Schadenspunkte mehr mal der Anzahl der Schadensmarken auf diesem Pokémon zu."
			},
			damage: "10+",

		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 372402
	}
}

export default card
