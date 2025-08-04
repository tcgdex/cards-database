import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Zebstrika",
		fr: "Zéblitz",
		es: "Zebstrika",
		it: "Zebstrika",
		pt: "Zebstrika",
		de: "Zebritz"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		523,
	],

	hp: 100,

	types: [
		"Lightning",
	],

	evolveFrom: {
		en: "Blitzle",
		fr: "Zébibron",
		es: "Blitzle",
		it: "Blitzle",
		pt: "Blitzle",
		de: "Elezeba"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Zap Zone",
				fr: "Zone Électrique",
				es: "Electrozona",
				it: "Zona Elettrica",
				pt: "Zona Zap",
				de: "Stromzone"
			},
			effect: {
				en: "Damage from the attacks of your Lightning Pokémon isn't affected by any effects on your opponent's Active Pokémon.",
				fr: "Les dégâts des attaques de vos Pokémon Lightning ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				es: "El daño de los ataques de tus Pokémon Lightning no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				it: "I danni degli attacchi dei tuoi Pokémon Lightning non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				pt: "O dano causado pelos ataques do seu Pokémon Lightning não é afetado por nenhum efeito no Pokémon Ativo do seu oponente.",
				de: "Der Schaden der Angriffe deiner Lightning-Pokémon wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crashing Bolt",
				fr: "Éclair Fracassant",
				es: "Rayo Demoledor",
				it: "Schiantobolide",
				pt: "Estrondo de Raio",
				de: "Herabstürzender Blitz"
			},
			effect: {
				en: "If your opponent's Active Pokémon has Fighting Resistance, this attack does 60 more damage.",
				fr: "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
				es: "Si el Pokémon Activo de tu rival tiene Resistencia a Fighting, este ataque hace 60 puntos de daño más.",
				it: "Se il Pokémon attivo del tuo avversario ha resistenza al tipo Fighting, questo attacco infligge 60 danni in più.",
				pt: "Se o Pokémon Ativo do seu oponente tiver Resistência Fighting, este ataque causará 60 de danos adicionais.",
				de: "Wenn das Aktive Pokémon deines Gegners eine Resistenz gegenüber Fighting-Pokémon hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Metal",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 288224,
		tcgplayer: 111556
	}
}

export default card
