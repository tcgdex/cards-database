import { Card } from "../../../interfaces"
import Set from "../Delta Reign"

const card: Card = {
	set: Set,

	name: {
		en: "Delibird",
		fr: "Cadoizo",
		de: "Botogel",
		es: "Delibird",
		it: "Delibird",
		pt: "Delibird",
		'es-mx': "Delibird"
	},

	illustrator: "satoma",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Energizing Present",
			fr: "Cadeau Énergisant",
			de: "Energiespendendes Geschenk",
			es: "Presente Energético",
			it: "Regalino Energizzante",
			pt: "Presente Energizante",
			'es-mx': "Obsequio Energizante"
		},

		effect: {
			en: "Once during your turn, if this Pokémon is in the Active Spot, you may use this Ability. Look at the top 6 cards of your deck, reveal an Energy card you find there, and put it into your hand. Shuffle the other cards and put them on the bottom of your deck.",
			fr: "Une fois pendant votre tour, si ce Pokémon est sur le Poste Actif, vous pouvez utiliser ce talent. Regardez les 6 cartes du dessus de votre deck, montrez une carte Énergie que vous y trouvez, puis ajoutez‑la à votre main. Mélangez les autres cartes et placez‑les en dessous de votre deck.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon in der Aktiven Position ist, kannst du diese Fähigkeit einsetzen. Schau dir die obersten 6 Karten deines Decks an, zeige deinem Gegner 1 Energiekarte, die du dort findest, und nimm sie auf deine Hand. Mische die anderen Karten und lege sie unter dein Deck.",
			es: "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta habilidad. Mira las 6 primeras cartas de tu baraja, enseña 1 carta de Energía que encuentres entre ellas y ponla en tu mano. Baraja el resto de las cartas y ponlas en la parte inferior de tu baraja.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon è in posizione attiva, puoi usare questa abilità. Guarda le prime sei carte del tuo mazzo, mostra una carta Energia presente tra esse e aggiungila alle carte che hai in mano. Rimischia le altre carte e mettile in fondo al tuo mazzo.",
			pt: "Uma vez durante o seu turno, se este Pokémon estiver no Campo Ativo, você poderá usar esta Habilidade. Olhe as 6 cartas de cima do seu baralho, revele uma carta de Energia que você encontrar lá e coloque-a na sua mão. Embaralhe as outras cartas e coloque-as como as cartas de baixo do seu baralho.",
			'es-mx': "Una vez durante tu turno, si este Pokémon está en el Puesto Activo, puedes usar esta Habilidad. Mira las primeras 6 cartas de tu mazo, muestra 1 carta de Energía que encuentres entre ellas y ponla en tu mano. Baraja el resto de las cartas y ponlas en la parte inferior de tu mazo."
		}
	}],

	attacks: [{
		name: {
			en: "Beat",
			fr: "Bataille",
			de: "Verprügler",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			'es-mx': "Golpeteo"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 726540,
				cardmarket: 918907
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 726540,
				cardmarket: 918907
			}
		}
	],
}

export default card