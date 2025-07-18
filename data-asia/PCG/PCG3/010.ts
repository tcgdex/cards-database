import {Card} from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Masquerain",
         ja: "仮面舞踏会",
         fr: "Mascarain",
         de: "Masquerain",
         es: "Estafera",
         it: "Mascherain",
         pt: "Masquerain",
      },

      rarity: "Rare",
      category: "Pokemon",
      dexId: [284],
      hp: 60,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Intimidating Pattern",
            ja: "威圧的なパターン",
            fr: "Modèle intimidant",
            de: "Einschüchterndes Muster",
            es: "Patrón intimidante",
            it: "Pattern intimidatorio",
            pt: "Padrão intimidador",
          },
          effect: {
            en: "As long as Masquerain is your Active PokÃ©mon, any damage done by an opponent's attack is reduced by 20 (before applying Weakness and Resistance). You can't use more than 1 Intimidating Pattern PokÃ©-Body each turn.",
            ja: "マスカレインがあなたのアクティブなポケモンである限り、相手の攻撃によって与えられた損害は20増加します（脱力感と抵抗を適用する前）。 1ターンを1ターン以上ボディを使用することはできません。",
            fr: "Tant que Masquerain est votre poké actif, tout dommage causé par l'attaque d'un adversaire est réduit de 20 (avant d'appliquer la faiblesse et la résistance). Vous ne pouvez pas utiliser plus d'un modèle intimidant Pokã © -Body à chaque tour.",
            de: "Solange Masquerain Ihr aktiver Pokémon ist, wird jeder Schaden, der durch den Angriff eines Gegners angerichtet wird, um 20 reduziert (bevor Schwäche und Widerstand angewendet werden). Sie können nicht mehr als 1 einschüchterndes Muster verwenden.",
            es: "Mientras Masquerain sea su Poké Mon activo, cualquier daño causado por el ataque de un oponente se reduce en 20 (antes de aplicar debilidad y resistencia). No puede usar más de 1 patrón de intimidación Poké-cuerpo en cada giro.",
            it: "Finché Mascherain è il tuo poké attivo, qualsiasi danno causato dall'attacco di un avversario è ridotto di 20 (prima di applicare debolezza e resistenza). Non è possibile utilizzare più di 1 pattern intimidatorio Pokã © -body ogni turno.",
            pt: "Enquanto o Masquerain for o seu Poké de Mon ativo, qualquer dano causado pelo ataque de um oponente é reduzido em 20 (antes de aplicar fraqueza e resistência). Você não pode usar mais de 1 padrão intimidador Poké-corpo a cada turno.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Stun Spore",
            ja: "スタン胞子",
            fr: "Spored",
            de: "Stun Spore",
            es: "Espora",
            it: "Spora stordente",
            pt: "Esporo de atordoamento",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon is now Paralyzed.",
            ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense est maintenant paralysé.",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, ist das verteidigende Pokémon jetzt gelähmt.",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor ahora está paralizado.",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica è ora paralizzato.",
            pt: "Vire uma moeda. Se as cabeças, o pokemon defensor agora está paralisado.",
          },
          damage: 20,
        },
      ],


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
