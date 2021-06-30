import { Card } from '../../../interfaces'
import Set from '../Team Up'

const card: Card = {
	name: {
		en: "Jirachi",
		fr: "Jirachi",
		es: "Jirachi",
		it: "Jirachi",
		pt: "Jirachi",
		de: "Jirachi"
	},
	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		385,
	],
	hp: 70,
	types: [
		"Metal",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stellar Wish",
				fr: "Souhait Stellaire",
				es: "Deseo Estelar",
				it: "Desideriostellare",
				pt: "Desejo Estelar",
				de: "Sternensuche"
			},
			effect: {
				en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may look at the top 5 cards of your deck, reveal a Trainer card you find there, and put it into your hand. Then, shuffle the other cards back into your deck, and this Pokémon is now Asleep.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez regarder les 5 cartes du dessus de votre deck, montrer une carte Dresseur que vous y trouvez, puis l’ajouter à votre main. Ensuite, mélangez les autres cartes avec votre deck, et ce Pokémon est maintenant Endormi.",
				es: "Una vez durante tu turno (antes de tu ataque), si este Pokémon es tu Pokémon Activo, puedes mirar las 5 primeras cartas de tu baraja, enseñar 1 carta de Entrenador que encuentres entre ellas y ponerla en tu mano. Después, pon el resto de cartas de nuevo en tu baraja y barájalas todas, y este Pokémon pasa a estar Dormido.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se questo Pokémon è il tuo Pokémon attivo, puoi guardare le prime cinque carte del tuo mazzo, mostrare una carta Allenatore presente tra quelle carte e aggiungerla alle carte che hai in mano. Poi rimischia le altre carte nel tuo mazzo e questo Pokémon viene addormentato.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se este Pokémon for o seu Pokémon Ativo, você poderá olhar as 5 primeiras cartas do seu baralho, revelar uma carta de Treinador que encontrar lá e colocá-la na sua mão. Em seguida, embaralhe as demais cartas de volta no seu baralho e este Pokémon agora está Adormecido.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn dieses Pokémon dein Aktives Pokémon ist, kannst du dir die obersten 5 Karten deines Decks anschauen, 1 Trainerkarte, die du dort findest, deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend die anderen Karten zurück in dein Deck. Dieses Pokémon schläft jetzt."
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
				en: "Slap",
				fr: "Gifle",
				es: "Bofetón",
				it: "Sberla",
				pt: "Tapa",
				de: "Hieb"
			},

			damage: 30,

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



}

export default card
