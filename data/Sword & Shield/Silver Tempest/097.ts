import { Card } from "../../../interfaces"
import Set from "../Silver Tempest"

const card: Card = {
	set: Set,

	name: {
		en: "Terrakion",
		fr: "Terrakium",
		es: "Terrakion",
		it: "Terrakion",
		pt: "Terrakion",
		de: "Terrakium"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Cavern Tackle",
			fr: "Charge Troglodyte",
			es: "Placaje Gruta",
			it: "Azione Cavernosa",
			pt: "Investida Cavernosa",
			de: "Felsenhöhlentackle"
		},

		effect: {
			en: "During your opponent's next turn, prevent all damage from attacks done to this Pokémon. If 1 of your Pokémon used Cavern Tackle during your last turn, this attack can't be used.",
			fr: "Pendant le prochain tour de votre adversaire, évitez tous les dégâts d'attaques infligés à ce Pokémon. Si l'un de vos Pokémon a utilisé Charge Troglodyte lors de votre dernier tour, cette attaque ne peut pas être utilisée.",
			es: "Durante el próximo turno de tu rival, evita todo el daño de los ataques infligidos a este Pokémon. Si 1 de tus Pokémon usó Placaje Gruta durante tu último turno, este ataque no se puede usar.",
			it: "Durante il prossimo turno del tuo avversario, previeni tutti i danni degli attacchi inflitti a questo Pokémon. Se uno dei tuoi Pokémon ha usato Azione Cavernosa durante il tuo ultimo turno, questo attacco non può essere usato.",
			pt: "Durante o próximo turno do seu oponente, previna todo o dano causado a este Pokémon por ataques. Se 1 dos seus Pokémon usou Investida Cavernosa durante o seu último turno, este ataque não poderá ser usado.",
			de: "Verhindere während des nächsten Zuges deines Gegners allen Schaden von Attacken, der diesem Pokémon zugefügt wird. Wenn 1 deiner Pokémon während deines letzten Zuges Felsenhöhlentackle eingesetzt hat, kann diese Attacke nicht eingesetzt werden."
		},

		damage: 120
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card