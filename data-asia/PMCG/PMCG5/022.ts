import {Card} from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
      set: Set,
      name: {
         en: "Misty's Poliwag",
         ja: "ミスティのポリワグ",
         fr: "Poliwag de Misty",
         de: "Mistys Poliwag",
         es: "Poliwag de Misty",
         it: "Misty's Poliwag",
         pt: "Misty's Poliwag",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [60],
      hp: 50,
      types: ["Water"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Water"],
          name: {
            en: "Bubbles",
            ja: "泡",
            fr: "Bulles",
            de: "Blasen",
            es: "Burbujas",
            it: "Bolle",
            pt: "Bolhas",
          },
          effect: {
            en: "Flip a coin. If tails, you can't use this attack during your next turn.",
            ja: "コインをひっくり返します。テールの場合、次のターン中にこの攻撃を使用することはできません。",
            fr: "Retourner une pièce. Si Tails, vous ne pouvez pas utiliser cette attaque pendant votre prochain tour.",
            de: "Eine Münze drehen. Wenn Sie Schwänze haben, können Sie diesen Angriff in Ihrer nächsten Kurve nicht anwenden.",
            es: "Voltea una moneda. Si Tails, no puedes usar este ataque durante tu próximo turno.",
            it: "Capovolgi una moneta. Se coda, non puoi usare questo attacco durante il tuo prossimo turno.",
            pt: "Vire uma moeda. Se as caudas, você não pode usar esse ataque durante o próximo turno.",
          },
          damage: 20,
        },
        {
          cost: ["Water", "Water"],
          name: {
            en: "Amnesia",
            ja: "健忘症",
            fr: "Amnésie",
            de: "Amnesie",
            es: "Amnesia",
            it: "Amnesia",
            pt: "Amnésia",
          },
          effect: {
            en: "Choose 1 of the Defending Pokemon's attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "防御ポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Choisissez 1 des attaques de Pokémon en défense. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Wählen Sie 1 der Angriffe des Verteidigungspokemons. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Elija 1 de los ataques defensores de Pokémon. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Scegli 1 degli attacchi del Pokemon in carica. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Escolha 1 dos ataques de Pokémon em defesa. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
          subtype: "unlimited",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
