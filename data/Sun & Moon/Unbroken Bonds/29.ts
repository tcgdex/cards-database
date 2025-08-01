import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Incineroar",
		fr: "Félinferno",
		es: "Incineroar",
		it: "Incineroar",
		pt: "Incineroar",
		de: "Fuegro"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		727,
	],

	hp: 160,

	types: [
		"Fire",
	],

	evolveFrom: {
		en: "Torracat",
		fr: "Matoufeu",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Strong Cheer",
				fr: "Acclamation Forte",
				es: "Fuerte Ovación",
				it: "Incitamento Caloroso",
				pt: "Torcida Animada",
				de: "Starker Zuspruch"
			},
			effect: {
				en: "Your Pokémon’s attacks do 30 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance). You can’t apply more than 1 Strong Cheer Ability at a time.",
				fr: "Les attaques de vos Pokémon infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Acclamation Forte à la fois.",
				es: "Los ataques de tus Pokémon hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Fuerte Ovación a la vez.",
				it: "Gli attacchi dei tuoi Pokémon infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Incitamento Caloroso alla volta.",
				pt: "Os ataques dos seus Pokémon causam 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Torcida Animada por vez.",
				de: "Die Attacken deiner Pokémon fügen dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden). Du kannst immer nur jeweils 1 Fähigkeit Starker Zuspruch einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Colorless",
			],
			name: {
				en: "Flamethrower",
				fr: "Lance-Flammes",
				es: "Lanzallamas",
				it: "Lanciafiamme",
				pt: "Lança-chamas",
				de: "Flammenwurf"
			},
			effect: {
				en: "Discard an Energy from this Pokémon.",
				fr: "Défaussez une Énergie de ce Pokémon.",
				es: "Descarta 1 Energía de este Pokémon.",
				it: "Scarta un’Energia assegnata a questo Pokémon.",
				pt: "Descarte 1 Energia deste Pokémon.",
				de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
			},
			damage: 90,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 372321
	}
}

export default card
