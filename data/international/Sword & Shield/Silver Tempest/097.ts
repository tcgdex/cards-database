import { Card } from "models/database/card"
import Set from "../Silver Tempest"

const card: Card = {
	dexId: [639],
	set: Set,

	name: {
		'en-us': "Terrakion",
		'fr-fr': "Terrakium",
		'es-es': "Terrakion",
		'it-it': "Terrakion",
		'pt-br': "Terrakion",
		'de-de': "Terrakium"
	},

	illustrator: "nagimiso",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Cavern Tackle",
			'fr-fr': "Charge Troglodyte",
			'es-es': "Placaje Gruta",
			'it-it': "Azione Cavernosa",
			'pt-br': "Investida Cavernosa",
			'de-de': "Felsenhöhlentackle"
		},

		effect: {
			'en-us': "During your opponent's next turn, prevent all damage from attacks done to this Pokémon. If 1 of your Pokémon used Cavern Tackle during your last turn, this attack can't be used.",
			'fr-fr': "Pendant le prochain tour de votre adversaire, évitez tous les dégâts d'attaques infligés à ce Pokémon. Si l'un de vos Pokémon a utilisé Charge Troglodyte lors de votre dernier tour, cette attaque ne peut pas être utilisée.",
			'es-es': "Durante el próximo turno de tu rival, evita todo el daño de los ataques infligidos a este Pokémon. Si 1 de tus Pokémon usó Placaje Gruta durante tu último turno, este ataque no se puede usar.",
			'it-it': "Durante il prossimo turno del tuo avversario, previeni tutti i danni degli attacchi inflitti a questo Pokémon. Se uno dei tuoi Pokémon ha usato Azione Cavernosa durante il tuo ultimo turno, questo attacco non può essere usato.",
			'pt-br': "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques. Se 1 dos seus Pokémon usou Investida Cavernosa durante o seu último turno, este ataque não poderá ser usado.",
			'de-de': "Verhindere während des nächsten Zuges deines Gegners allen Schaden von Attacken, der diesem Pokémon zugefügt wird. Wenn 1 deiner Pokémon während deines letzten Zuges Felsenhöhlentackle eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "F",


	description: {
		'en-us': "It has phenomenal power. It will mercilessly crush anyone or anything that bullies small Pokémon.",
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 682144,
				tcgplayer: 451751
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 682144,
				tcgplayer: 451751
			}
		},
	],
}

export default card
