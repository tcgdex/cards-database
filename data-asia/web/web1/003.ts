import {Card} from "../../../interfaces"
import Set from "../web1"

const card: Card = {
      set: Set,
      name: {
         en: "Venonat",
         ja: "ヴェノナト",
         fr: "Venonat",
         de: "Venonat",
         es: "Venonat",
         it: "Venonat",
         pt: "Venonat",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [48],
      hp: 50,
      types: ["Grass"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Disable",
            ja: "無効にします",
            fr: "Désactiver",
            de: "Deaktivieren",
            es: "Desactivar",
            it: "Disabilitare",
            pt: "Desativar",
          },
          effect: {
            en: "Flip a coin. If heads, choose 1 of the Defending Pokemon's attacks. That Pokemon can't use that attack during your opponent's next turn.",
            ja: "コインをひっくり返します。頭の場合は、防御するポケモンの攻撃の1つを選択します。そのポケモンは、相手の次のターン中にその攻撃を使用できません。",
            fr: "Retourner une pièce. Si les têtes, choisissez 1 des attaques de Pokémon en défense. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, wählen Sie 1 der Angriffe des Verteidigungspokemons. Dieses Pokemon kann diesen Angriff in der nächsten Runde Ihres Gegners nicht verwenden.",
            es: "Voltea una moneda. Si se dirige, elija 1 de los ataques del Pokémon defensores. Ese Pokémon no puede usar ese ataque durante el próximo turno de tu oponente.",
            it: "Capovolgi una moneta. Se la testa, scegli 1 degli attacchi di Pokemon in carica. Quel Pokemon non può usare quell'attacco durante il prossimo turno del tuo avversario.",
            pt: "Vire uma moeda. Se as cabeças, escolha 1 dos ataques de Pokemon em defesa. Esse Pokémon não pode usar esse ataque durante o próximo turno do seu oponente.",
          },
        },
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Psybeam",
            ja: "PSYBEAM",
            fr: "Psybeam",
            de: "Psybeam",
            es: "Psíquico",
            it: "Psybeam",
            pt: "Psybeam",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Confused.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant confus.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokemon jetzt verwirrt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está confundido.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora confuso.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual agora está confuso.",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
        {
          type: "normal",
          stamp: ["1st edition"],
        },
      ],
};
