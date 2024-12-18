import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [344],
	set: Set,

	name: {
		fr: "Kaorine",
		en: "Claydol",
		es: "Claydol",
		it: "Claydol",
		pt: "Claydol",
		de: "Lepumentas"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			fr: "Poupée Boum",
			en: "Kaboom Doll",
			es: "Muñeca Bum",
			it: "Bombambola",
			pt: "Boneco Explosivo",
			de: "Krawumm-Puppe"
		},

		effect: {
			fr: "Placez des marqueurs de dégâts sur le Pokémon Actif de votre adversaire jusqu'à ce qu'il ne lui reste que 10 PV. Si vous avez placé au moins un marqueur de dégâts de cette façon, cette attaque inflige aussi 120 dégâts à ce Pokémon.",
			en: "Put damage counters on your opponent's Active Pokémon until its remaining HP is 10. If you placed any damage counters in this way, this attack also does 120 damage to this Pokémon.",
			es: "Pon contadores de daño en el Pokémon Activo de tu rival hasta que le queden 10 PS. Si has puesto algún contador de daño de esta manera, este ataque también hace 120 puntos de daño a este Pokémon.",
			it: "Metti dei segnalini danno sul Pokémon attivo del tuo avversario finché i suoi PS rimanenti diventano 10. Se hai messo dei segnalini danno in questo modo, questo attacco infligge anche 120 danni a questo Pokémon.",
			pt: "Coloque contadores de dano no Pokémon Ativo do seu oponente até o PS restante dele ser 10. Se você colocou algum contador de dano desta forma, este ataque também causará 120 pontos de dano a este Pokémon.",
			de: "Lege so lange Schadensmarken auf das Aktive Pokémon deines Gegners, bis seine verbleibenden KP gleich 10 sind. Wenn du auf diese Weise mindestens 1 Schadensmarke platziert hast, fügt diese Attacke auch diesem Pokémon 120 Schadenspunkte zu."
		}
	}, {
		cost: ["Psychic"],

		name: {
			fr: "Contrôleur d'Esprit",
			en: "Mind Bend",
			es: "Fusión Mental",
			it: "Fusione Mentale",
			pt: "Dobra Mentes",
			de: "Gedankenverbiegung"
		},

		effect: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
			en: "Your opponent's Active Pokémon is now Confused.",
			es: "El Pokémon Activo de tu rival pasa a estar Confundido.",
			it: "Il Pokémon attivo del tuo avversario viene confuso.",
			pt: "O Pokémon Ativo do seu oponente agora está Confuso.",
			de: "Das Aktive Pokémon deines Gegners ist jetzt verwirrt."
		},

		damage: 30
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		normal: false
	},

	evolveFrom: {
		en: "Baltoy",
		fr: "Balbuto",
		es: "Baltoy",
		it: "Baltoy",
		pt: "Baltoy",
		de: "Puppance"
	}
}

export default card
