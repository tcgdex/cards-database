import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Scizor GX",
		'fr-fr': "Cizayox GX",
		'es-es': "Scizor GX",
		'it-it': "Scizor GX",
		'pt-br': "Scizor GX",
		'de-de': "Scherox GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		212,
	],

	hp: 210,

	types: [
		"Metal",
	],

	evolveFrom: {
		'en-us': "Scyther",
		'fr-fr': "Insécateur",
	},

	suffix: "GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Danger Perception",
				'fr-fr': "Perception du Danger",
				'es-es': "Percepción del Peligro",
				'it-it': "Senso del Pericolo",
				'pt-br': "Percepção de Perigo",
				'de-de': "Gefahrensinn"
			},
			effect: {
				'en-us': "If this Pokémon’s remaining HP is 100 or less, its attacks do 80 more damage to your opponent’s Active Pokémon (before applying Weakness and Resistance).",
				'fr-fr': "S’il reste 100 PV ou moins à ce Pokémon, ses attaques infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
				'es-es': "Si a este Pokémon le quedan 100 PS o menos, sus ataques hacen 80 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
				'it-it': "Se i PS rimanenti di questo Pokémon sono 100 o meno, i suoi attacchi infliggono 80 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
				'pt-br': "Se o PS restante deste Pokémon for 100 ou menos, seus ataques causarão 80 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
				'de-de': "Wenn die verbleibenden KP dieses Pokémon 100 oder weniger betragen, fügen seine Attacken dem Aktiven Pokémon deines Gegners 80 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Steel Wing",
				'fr-fr': "Aile d’Acier",
				'es-es': "Ala de Acero",
				'it-it': "Alacciaio",
				'pt-br': "Asa de Aço",
				'de-de': "Stahlflügel"
			},
			effect: {
				'en-us': "During your opponent’s next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
				'fr-fr': "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
				'es-es': "Durante el próximo turno de tu rival, los ataques hacen 30 puntos de daño menos a este Pokémon (después de aplicar Debilidad y Resistencia).",
				'it-it': "Durante il prossimo turno del tuo avversario, questo Pokémon subisce 30 danni in meno dagli attacchi, dopo aver applicato debolezza e resistenza.",
				'pt-br': "Durante a próxima vez de jogar do seu oponente, este Pokémon receberá 30 pontos de dano a menos de ataques (após a aplicação de Fraqueza e Resistência).",
				'de-de': "Während des nächsten Zuges deines Gegners werden diesem Pokémon durch Attacken 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
			damage: 80,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Cross-Cut GX",
				'fr-fr': "Coupe Transversale GX",
				'es-es': "Atajar GX",
				'it-it': "Fendente Incrociato-GX",
				'pt-br': "Corte em Cruz GX",
				'de-de': "Überkreuzzerschneider GX"
			},
			effect: {
				'en-us': "If your opponent’s Active Pokémon is an Evolution Pokémon, this attack does 100 more damage. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 100 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Si el Pokémon Activo de tu rival es un Pokémon Evolución, este ataque hace 100 puntos de daño más. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Se il Pokémon attivo del tuo avversario è un Pokémon Evoluzione, questo attacco infligge 100 danni in più. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Se o Pokémon Ativo do seu oponente for um Pokémon de Evolução, este ataque causará 100 pontos de dano a mais (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wenn das Aktive Pokémon deines Gegners ein Entwicklungs-Pokémon ist, fügt diese Attacke 100 Schadenspunkte mehr zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 362168,
		tcgplayer: 170914
	}
}

export default card
