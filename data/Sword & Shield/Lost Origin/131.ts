import { Card } from "../../../interfaces"
import Set from "../Lost Origin"

const card: Card = {
	set: Set,

	name: {
		en: "Giratina VSTAR",
		fr: "Giratina VSTAR",
		es: "Giratina V-ASTRO",
		it: "Giratina V ASTRO",
		pt: "Giratina V-ASTRO",
		de: "Giratina VSTAR"
	},

	rarity: "Holo Rare VSTAR",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],

	evolveFrom: {
		en: "Giratina V",
		fr: "Giratina-V",
		es: "Giratina V",
		it: "Giratina-V",
		pt: "Giratina V",
		de: "Giratina-V"
	},

	stage: "VSTAR",
	suffix: "V",

	attacks: [{
		cost: ["Grass", "Psychic", "Colorless"],

		name: {
			en: "Lost Impact",
			fr: "Impact Perdu",
			es: "Impacto Perdido",
			it: "Impatto Perduto",
			pt: "Impacto Perdido",
			de: "Nirgendwo-Einschlag"
		},

		effect: {
			en: "Put 2 Energy attached to your Pokémon in the Lost Zone.",
			fr: "Placez 2 Énergies attachées à vos Pokémon dans la Zone Perdue.",
			es: "Pon 2 Energías unidas a tus Pokémon en la Zona Perdida.",
			it: "Prendi due Energie assegnate ai tuoi Pokémon e mettile nell'area perduta.",
			pt: "Coloque 2 Energias ligadas aos seus Pokémon na Zona Perdida.",
			de: "Lege 2 an deine Pokémon angelegte Energien ins Nirgendwo."
		},

		damage: 280
	}, {
		cost: ["Grass", "Psychic"],

		name: {
			en: "Star Requiem",
			fr: "Requiem Star",
			es: "Astro Réquiem",
			it: "Astro Requiem",
			pt: "Réquiem Astral",
			de: "Sternenrequiem"
		},

		effect: {
			en: "You can use this attack only if you have 10 or more cards in the Lost Zone. Your opponent's Active Pokémon is Knocked Out. (You can't use more than 1 VSTAR Power in a game.)",
			fr: "Vous ne pouvez utiliser cette attaque que si vous avez 10 cartes ou plus dans la Zone Perdue. Le Pokémon Actif de votre adversaire est mis K.O. (Vous ne pouvez utiliser qu'une seule Puissance VSTAR par partie.)",
			es: "Puedes usar este ataque solo si tienes 10 cartas o más en la Zona Perdida. El Pokémon Activo de tu rival queda Fuera de Combate. (No puedes usar más de 1 Poder V-ASTRO en una partida).",
			it: "Puoi usare questo attacco solo se hai 10 o più carte nell'area perduta. Il Pokémon attivo del tuo avversario viene messo KO. Non puoi usare più di un Potere V ASTRO a partita.",
			pt: "Você só pode usar este ataque se tiver 10 ou mais cartas na Zona Perdida. O Pokémon Ativo do seu oponente é Nocauteado (você não pode usar mais de 1 Poder V-ASTRO por partida).",
			de: "Du kannst diese Attacke nur einsetzen, wenn du 10 oder mehr Karten im Nirgendwo hast. Das Aktive Pokémon deines Gegners ist kampfunfähig. (Du kannst pro Spiel nur 1 VSTAR-Power einsetzen.)"
		}
	}],

	retreat: 2,
	regulationMark: "F",

	variants: {
		"normal": false,
		"reverse": false,
		"holo": true
	},

	thirdParty: {
		cardmarket: 674143
	}
}

export default card
