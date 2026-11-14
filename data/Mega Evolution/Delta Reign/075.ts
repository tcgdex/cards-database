import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Kommo-o",
		fr: "Ékaïser",
		de: "Grandiras",
		es: "Kommo-o",
		it: "Kommo-o",
		pt: "Kommo-o",
		'es-mx': "Kommo-o"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Dragon"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Beat Scales",
			fr: "Écailles Entrechoquées",
			de: "Schuppenklappern",
			es: "Escamas Resonantes",
			it: "Battito di Squame",
			pt: "Clangor de Escamas",
			'es-mx': "Escamas Resonantes"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Look at the top 6 cards of your deck and attach any number of Basic Energy cards you find there to your Dragon Pokémon in any way you like. Shuffle the other cards back into your deck.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Regardez les 6 cartes du dessus de votre deck, puis attachez le nombre voulu de cartes Énergie de base que vous y trouvez à vos Pokémon Dragon, comme il vous plaît. Mélangez les autres cartes avec votre deck.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Schau dir die obersten 6 Karten deines Decks an und lege beliebig viele Basis-Energiekarten, die du dort findest, beliebig an deine Dragon-Pokémon an. Mische die anderen Karten zurück in dein Deck.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Mira las 6 primeras cartas de tu baraja y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon Dragon de la manera que desees. Pon el resto de las cartas de nuevo en tu baraja y barájalas todas.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Guarda le prime sei carte del tuo mazzo e assegna un numero qualsiasi di carte Energia base presenti tra esse ai tuoi Pokémon Dragon nel modo che preferisci. Rimischia le altre carte nel tuo mazzo.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Olhe as 6 cartas de cima do seu baralho e ligue qualquer número de cartas de Energia Básica que você encontrar lá aos seus Pokémon Dragon como desejar. Embaralhe as outras cartas de volta no seu baralho.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Mira las primeras 6 cartas de tu mazo y une cualquier cantidad de cartas de Energía Básica que encuentres entre ellas a tus Pokémon Dragon de la manera que quieras. Baraja el resto de las cartas de nuevo en tu mazo."
		}
	}],

	attacks: [{
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
			de: "Einhämmern",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			'es-mx': "Martillar"
		},

		damage: 170,
		cost: ["Lightning", "Fighting", "Colorless"]
	}],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726538,
				cardmarket: 918903
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726538,
				cardmarket: 918903
			}
		}
	],
}

export default card