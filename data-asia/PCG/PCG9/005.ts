import {Card} from "../../../interfaces"
import Set from "../PCG9"

const card: Card = {
      set: Set,
      name: {
         en: "Wooper (Delta Species)",
         ja: "ウーパー（デルタ種）",
         fr: "Wooper (espèces delta)",
         de: "Wooper (Delta -Arten)",
         es: "Wooper (especie delta)",
         it: "Wooper (Delta Species)",
         pt: "Wooper (espécies Delta)",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [194],
      hp: 40,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
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
        {
          cost: ["Grass", "Colorless"],
          name: {
            en: "Tail Slap",
            ja: "テールスラップ",
            fr: "Gifle",
            de: "Schwanzschlag",
            es: "Bofetada",
            it: "Slap di coda",
            pt: "Tail Slap",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
