import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [53],
	set: Set,

	name: {
		en: "Team Rocket's Persian ex",
		fr: "Persian-ex de la Team Rocket",
		de: "Team Rockets Snobilikat-ex",
		it: "Persian-ex del Team Rocket",
		es: "Persian ex del Team Rocket",
		pt: "Persian ex da Equipe Rocket",
		'es-mx': "Persian ex del Equipo Rocket"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Colorless"],
	evolveFrom: {
		en: "Team Rocket's Meowth",
		fr: "Miaouss de la Team Rocket",
		de: "Team Rockets Mauzi",
		it: "Meowth del Team Rocket",
		es: "Meowth del Team Rocket",
		pt: "Meowth da Equipe Rocket",
		'es-mx': "Meowth del Equipo Rocket"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Haughty Order",
			fr: "Ordre Hautain",
			de: "Anmaßender Befehl",
			it: "Ordine Altezzoso",
			es: "Orden Arrogante",
			pt: "Ordem Arrogante",
			'es-mx': "Orden Soberbia"
		},

		effect: {
			en: "Reveal the top 10 cards of your opponent's deck. You may choose an attack from a Pokémon you find there and use it as this attack. Shuffle the revealed cards into your opponent's deck.",
			fr: "Montrez les 10 cartes du dessus du deck de votre adversaire. Vous pouvez choisir une attaque d'un Pokémon que vous y trouvez et l'utiliser en tant que cette attaque. Mélangez les cartes montrées avec le deck de votre adversaire.",
			de: "Decke die obersten 10 Karten des Decks deines Gegners auf. Du kannst 1 Attacke von 1 Pokémon, das du dort findest, wählen und sie als diese Attacke einsetzen. Mische die aufgedeckten Karten in das Deck deines Gegners.",
			it: "Mostra le prime 10 carte del mazzo del tuo avversario. Puoi scegliere un attacco di un Pokémon presente tra esse e usarlo al posto di questo attacco. Rimischia le carte mostrate nel mazzo del tuo avversario.",
			es: "Enseña las 10 primeras cartas de la baraja de tu rival. Puedes elegir un ataque de algún Pokémon que encuentres entre ellas y usarlo para este ataque. Pon las cartas que has enseñado en la baraja de tu rival y barájalas todas.",
			pt: "Revele as 10 cartas de cima do baralho do seu oponente. Você pode escolher um ataque de um Pokémon que encontrar lá e usá-lo como este ataque. Embaralhe as cartas reveladas no baralho do seu oponente.",
			'es-mx': "Muestra las primeras 10 cartas del mazo de tu rival. Puedes elegir 1 ataque de algún Pokémon que encuentres entre ellas y usarlo como este ataque. Pon las cartas que mostraste en el mazo de tu rival y barájalas todas."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Cruel Slash",
			fr: "Tranche Cruelle",
			de: "Grausamer Schlitzer",
			it: "Lacerazione Crudele",
			es: "Tajo Cruel",
			pt: "Talho Cruel",
			'es-mx': "Cuchillada Cruel"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Confundido."
		},

		damage: 140
	}],

	retreat: 2,
	regulationMark: "I",

	variants: [
		{
			type: 'holo'
		},
	],

	thirdParty: {
		cardmarket: 826024
	}
}

export default card
