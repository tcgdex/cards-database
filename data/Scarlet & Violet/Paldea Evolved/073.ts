import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		fr: "Wattapik",
		en: "Pincurchin",
		es: "Pincurchin",
		it: "Pincurchin",
		pt: "Pincurchin",
		de: "Britzigel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			fr: "Para-Dard",
			en: "Stun Needle",
			es: "Aguja Paralizante",
			it: "Ago Paralizzante",
			pt: "Agulha Estonteante",
			de: "Betäubungsnadel"
		},

		effect: {
			fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
			it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
			pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado.",
			de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
		},

		damage: 20
	}, {
		cost: ["Lightning"],

		name: {
			fr: "Zap de Relance",
			en: "Follow-Up Kerzap",
			es: "Seguimiento Zap",
			it: "Proseguimento Kerzap",
			pt: "Continuidade Chocante",
			de: "Anschluss-Kerzap"
		},

		effect: {
			fr: "Vous ne pouvez utiliser cette attaque que si ce Pokémon a utilisé Para-Dard pendant votre dernier tour.",
			en: "You can use this attack only if this Pokémon used Stun Needle during your last turn.",
			es: "Puedes usar este ataque solo si este Pokémon usó Aguja Paralizante durante tu último turno.",
			it: "Puoi usare questo attacco solo se questo Pokémon ha usato Ago Paralizzante durante il tuo ultimo turno.",
			pt: "Você só pode usar este ataque se este Pokémon usou Agulha Estonteante durante o seu último turno.",
			de: "Du kannst diese Attacke nur einsetzen, wenn dieses Pokémon während deines letzten Zuges Betäubungsnadel eingesetzt hat."
		},

		damage: 100
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card