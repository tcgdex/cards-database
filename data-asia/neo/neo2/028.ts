import {Card} from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
      set: Set,
      name: {
         en: "Unown U",
         ja: "Unown u",
         fr: "Non-bas",
         de: "Unown u",
         es: "UNDE U",
         it: "Unown U.",
         pt: "Unown u",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [201],
      hp: 40,
      types: ["Psychic"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "UNDO [Undo]",
            ja: "元に戻す[元に戻す]",
            fr: "Défaire [annuler]",
            de: "Rückgängig [rückgängig gemacht]",
            es: "Deshacer [deshacer]",
            it: "Annulla [annulla]",
            pt: "Desfazer [desfazer]",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, if you have Unown [U], Unown [N], Unown [D], and Unown [O] on your Bench, you may return your Active Pokmon and all cards attached to it to your hand.",
            ja: "ターン中に（攻撃の前）</em> </em>、[u]、[n]、[n]、[d]、および[o]がベンチにいる場合は、アクティブなpokmonとすべてのカードを手に返すことができます。",
            fr: "Une fois pendant votre tour <em> (Avant votre attaque) </em>, si vous avez non propriétaire [u], non-bas [n], non-bas [d] et non-bas [o] sur votre banc, vous pouvez retourner votre pokmon actif et toutes les cartes qui y sont attachées à votre main.",
            de: "Sobald Sie während Ihres Zuges <em> (vor Ihrem Angriff) </em> sind, wenn Sie unown [u], unown [n], unown [d] und unown [o] auf Ihrer Bank haben, können Sie Ihren aktiven Pokmon und alle an ihm verbundenen Karten an Ihre Hand zurückgeben.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, si no tiene [u], sin duda [n], sin duda [d] y sin duda [o] en su banco, puede devolver su pokmon activo y todas las cartas adjuntas a su mano.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, se non hai [u], unwnown [n], unwnown [d] e unwnown [o] in panchina, puoi restituire il tuo Pokmon attivo e tutte le carte attaccate alla tua mano.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, se você tem [u], unido [n], unown [d] e não own [o] em seu banco, você pode devolver seu Pokmon ativo e todos os cartões anexados à sua mão.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic"],
          name: {
            en: "Hidden Power",
            ja: "隠された力",
            fr: "Pouvoir caché",
            de: "Versteckte Kraft",
            es: "Poder oculto",
            it: "Potere nascosto",
            pt: "Poder oculto",
          },
          damage: 10,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
