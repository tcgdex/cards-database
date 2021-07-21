import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Flygon-GX",
		fr: "Libégon-GX",
		es: "Flygon-GX",
		it: "Flygon-GX",
		pt: "Flygon-GX",
		de: "Libelldra-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		330,
	],
	hp: 240,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Vibrava",
		fr: "Vibraninf",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dusty Defense",
				fr: "Défense Poussiéreuse",
				es: "Defensa Polvorienta",
				it: "Difesa Silicea",
				pt: "Defesa Arenosa",
				de: "Staubige Verteidigung"
			},
			effect: {
				en: "As long as this Pokémon is your Active Pokémon, all of your Pokémon take 30 less damage from your opponent’s attacks (after applying Weakness and Resistance).",
				fr: "Tant que ce Pokémon est votre Pokémon Actif, tous vos Pokémon subissent 30 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance).",
				es: "Mientras este Pokémon sea tu Pokémon Activo, los ataques de tu rival hacen 30 puntos de daño menos a todos tus Pokémon (después de aplicar Debilidad y Resistencia).",
				it: "Fintanto che questo Pokémon è il tuo Pokémon attivo, i tuoi Pokémon subiscono 30 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza.",
				pt: "Enquanto este Pokémon for o seu Pokémon Ativo, todos os seus Pokémon receberão 30 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência).",
				de: "Solang dieses Pokémon dein Aktives Pokémon ist, werden jedem deiner Pokémon durch Attacken deines Gegners 30 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden)."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Desert Hurricane",
				fr: "Ouragan du Désert",
				es: "Huracán del Desierto",
				it: "Tifone nel Deserto",
				pt: "Furacão do Deserto",
				de: "Wüstenhurrikan"
			},
			effect: {
				en: "If there is any Stadium card in play, this attack does 120 more damage. Then, discard that Stadium card.",
				fr: "S’il y a une carte Stade en jeu, cette attaque inflige 120 dégâts supplémentaires. Ensuite, défaussez la carte Stade.",
				es: "Si hay alguna carta de Estadio en juego, este ataque hace 120 puntos de daño más. Después, descarta esa carta de Estadio.",
				it: "Se c’è in gioco una carta Stadio, questo attacco infligge 120 danni in più. Poi scarta quella carta Stadio.",
				pt: "Se houver alguma carta de Estádio em jogo, este ataque causará 120 pontos de dano a mais. Em seguida, descarte aquela carta de Estádio.",
				de: "Wenn eine Stadionkarte im Spiel ist, fügt diese Attacke 120 Schadenspunkte mehr zu. Lege anschließend jene Stadionkarte auf den Ablagestapel."
			},
			damage: "120+",

		},
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Sonic Edge GX",
				fr: "Tranchant Sonique GX",
				es: "Tajo Sónico GX",
				it: "Muro del Suono GX",
				pt: "Gume Sônico GX",
				de: "Schallkante GX"
			},
			effect: {
				en: "This attack’s damage isn’t affected by any effects on your opponent’s Active Pokémon. (You can’t use more than 1 GX attack in a game.)",
				fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "El daño de este ataque no se ve afectado por ningún efecto en el Pokémon Activo de tu rival. (No puedes usar más de 1 ataque GX en una partida).",
				it: "I danni di questo attacco non sono influenzati da alcun effetto presente sul Pokémon attivo del tuo avversario. Non puoi usare più di un attacco GX a partita.",
				pt: "O dano deste ataque não é afetado por quaisquer efeitos no Pokémon Ativo do seu oponente (você não pode usar mais de 1 ataque GX por partida).",
				de: "Der Schaden dieser Attacke wird durch Effekte auf dem Aktiven Pokémon deines Gegners nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: 220,

		},
	],
	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 2,



}

export default card
