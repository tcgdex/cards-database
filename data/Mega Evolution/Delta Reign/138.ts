import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Rayquaza ex",
		fr: "Méga-Rayquaza‑ex",
		de: "Mega-Rayquaza-ex",
		es: "Mega-Rayquaza ex",
		it: "Mega Rayquaza-ex",
		pt: "Mega Rayquaza ex",
		'es-mx': "Mega-Rayquaza ex"
	},

	illustrator: "Kazuki Minami",
	rarity: "Special illustration rare",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			en: "Ruler's Roar",
			fr: "Rugissement du Souverain",
			de: "Gebrüll des Herrschers",
			es: "Rugido Regio",
			it: "Boato Dominante",
			pt: "Rugido Soberano",
			'es-mx': "Rugido Soberano"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand onto your Bench, you may use this Ability. Look at the top 4 cards of your deck and attach a Basic Energy card you find there to this Pokémon. Shuffle the other cards and put them on the bottom of your deck.",
			fr: "Une fois pendant votre tour, lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez utiliser ce talent. Regardez les 4 cartes du dessus de votre deck, puis attachez une carte Énergie de base que vous y trouvez à ce Pokémon. Mélangez les autres cartes et placez‑les en dessous de votre deck.",
			de: "Einmal während deines Zuges, wenn du dieses Pokémon aus deiner Hand auf deine Bank spielst, kannst du diese Fähigkeit einsetzen. Schau dir die obersten 4 Karten deines Decks an und lege 1 Basis-Energiekarte, die du dort findest, an dieses Pokémon an. Mische die anderen Karten und lege sie unter dein Deck.",
			es: "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes usar esta habilidad. Mira las 4 primeras cartas de tu baraja y une 1 carta de Energía Básica que encuentres entre ellas a este Pokémon. Baraja el resto de las cartas y ponlas en la parte inferior de tu baraja.",
			it: "Una sola volta durante il tuo turno, quando giochi questo Pokémon dalla tua mano e lo metti in panchina, puoi usare questa abilità. Guarda le prime quattro carte del tuo mazzo e assegna una carta Energia base presente tra esse a questo Pokémon. Rimischia le altre carte e mettile in fondo al tuo mazzo.",
			pt: "Uma vez durante o seu turno, quando você jogar este Pokémon da sua mão para o seu Banco, você poderá usar esta Habilidade. Olhe as 4 cartas de cima do seu baralho e ligue uma carta de Energia Básica que você encontrar lá a este Pokémon. Embaralhe as outras cartas e coloque-as como as cartas de baixo do seu baralho.",
			'es-mx': "Una vez durante tu turno, cuando juegas este Pokémon de tu mano a tu Banca, puedes usar esta Habilidad. Mira las primeras 4 cartas de tu mazo y une 1 carta de Energía Básica que encuentres entre ellas a este Pokémon. Baraja el resto de las cartas y ponlas en la parte inferior de tu mazo."
		}
	}],

	attacks: [{
		name: {
			en: "Storm Emerald",
			fr: "Tempête Émeraude",
			de: "Sturmsmaragd",
			es: "Tormenta Esmeralda",
			it: "Tempesta di Smeraldo",
			pt: "Tempestade Esmeralda",
			'es-mx': "Tormenta Esmeralda"
		},

		effect: {
			en: "This attack does 50 damage for each <span class=\"energy-symbol Fire\" title=\"Fire\">Fire</span> Energy and each <span class=\"energy-symbol Lightning\" title=\"Lightning\">Lightning</span> Energy attached to all of your Pokémon.",
			fr: "Cette attaque inflige 50 dégâts pour chaque Énergie <span class=\"energy-symbol Fire\" title=\"Feu\">Fire</span> et chaque Énergie <span class=\"energy-symbol Lightning\" title=\"Électrique\">Lightning</span> attachée à tous vos Pokémon.",
			de: "Diese Attacke fügt für jede an alle deine Pokémon angelegte <span class=\"energy-symbol Fire\" title=\"Feuer\">Fire</span>-Energie und <span class=\"energy-symbol Lightning\" title=\"Elektro\">Lightning</span>-Energie 50 Schadenspunkte zu.",
			es: "Este ataque hace 50 puntos de daño por cada Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> y cada Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> unidas a todos tus Pokémon.",
			it: "Questo attacco infligge 50 danni per ogni Energia <span class=\"energy-symbol Fire\" title=\"Fuoco\">Fire</span> e ogni Energia <span class=\"energy-symbol Lightning\" title=\"Lampo\">Lightning</span> assegnata ai tuoi Pokémon.",
			pt: "Este ataque causa 50 pontos de dano para cada Energia <span class=\"energy-symbol Fire\" title=\"Fogo\">Fire</span> e para cada Energia <span class=\"energy-symbol Lightning\" title=\"Raios\">Lightning</span> ligada a todos os seus Pokémon.",
			'es-mx': "Este ataque hace 50 puntos de daño por cada Energía <span class=\"energy-symbol Fire\" title=\"Fuego\">Fire</span> y cada Energía <span class=\"energy-symbol Lightning\" title=\"Rayo\">Lightning</span> unidas a todos tus Pokémon."
		},

		damage: "50×",
		cost: ["Fire", "Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,

	thirdParty: {
		tcgplayer: 728061,
		cardmarket: 918912
	}
}

export default card