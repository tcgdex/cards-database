import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Zebstrika",
		'fr-fr': "Zéblitz",
		'es-es': "Zebstrika",
		'it-it': "Zebstrika",
		'pt-br': "Zebstrika",
		'de-de': "Zebritz"
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
		'en-us': "Blitzle",
		'fr-fr': "Zébibron",
		'es-es': "Blitzle",
		'it-it': "Blitzle",
		'pt-br': "Blitzle",
		'de-de': "Elezeba"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Zap Zone",
				'fr-fr': "Zone Électrique",
				'es-es': "Electrozona",
				'it-it': "Zona Elettrica",
				'pt-br': "Zona Zap",
				'de-de': "Stromzone"
			},
			effect: {
				'en-us': "Damage from the attacks of your Lightning Pokémon isn't affected by any effects on your opponent's Active Pokémon.",
				'fr-fr': "Les dégâts des attaques de vos Pokémon Lightning ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
				'es-es': "El daño de los ataques de tus Pokémon Lightning no se ve afectado por ningún efecto en el Pokémon Activo de tu rival.",
				'it-it': "I danni degli attacchi dei tuoi Pokémon Lightning non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario.",
				'pt-br': "O dano causado pelos ataques do seu Pokémon Lightning não é afetado por nenhum efeito no Pokémon Ativo do seu oponente.",
				'de-de': "Der Schaden der Angriffe deiner Lightning-Pokémon wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert."
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
				'en-us': "Crashing Bolt",
				'fr-fr': "Éclair Fracassant",
				'es-es': "Rayo Demoledor",
				'it-it': "Schiantobolide",
				'pt-br': "Estrondo de Raio",
				'de-de': "Herabstürzender Blitz"
			},
			effect: {
				'en-us': "If your opponent's Active Pokémon has Fighting Resistance, this attack does 60 more damage.",
				'fr-fr': "Si le Pokémon Actif de votre adversaire a une Résistance à Fighting, cette attaque inflige 60 dégâts supplémentaires.",
				'es-es': "Si el Pokémon Activo de tu rival tiene Resistencia a Fighting, este ataque hace 60 puntos de daño más.",
				'it-it': "Se il Pokémon attivo del tuo avversario ha resistenza al tipo Fighting, questo attacco infligge 60 danni in più.",
				'pt-br': "Se o Pokémon Ativo do seu oponente tiver Resistência Fighting, este ataque causará 60 de danos adicionais.",
				'de-de': "Wenn das Aktive Pokémon deines Gegners eine Resistenz gegenüber Fighting-Pokémon hat, fügt dieser Angriff 60 weitere Schadenspunkte zu."
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

	description: {
		'en-us': "They have lightning-like movements. When Zebstrika run at full speed, the sound of thunder reverberates.",
	},

	thirdParty: {
		cardmarket: 288224,
		tcgplayer: 111556
	}
}

export default card
