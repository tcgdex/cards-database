import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
      set: Set,
      name: {
         en: "Muk ex",
         ja: "Muk Ex",
         fr: "Muk ex",
         de: "Muk ex",
         es: "Muk ex",
         it: "Muk Ex",
         pt: "Muk ex",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [89],
      hp: 100,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Toxic Gas",
            ja: "有毒ガス",
            fr: "Gaz toxique",
            de: "Giftiges Gas",
            es: "Gas tóxico",
            it: "Gas tossico",
            pt: "Gás tóxico",
          },
          effect: {
            en: "As long as Muk ex is your Active PokÃ©mon, ignore all PokÃ©-Powers and PokÃ©-Bodies other than Toxic Gas.",
            ja: "Muk Exがあなたのアクティブなポカモンである限り、すべてのPokã©-PowersとPokã©-Bodiesを無視してください。",
            fr: "Tant que Muk Ex est votre pokã © mon actif, ignorez tous les pokã © -Powers et Pokã © -bodies autres que le gaz toxique.",
            de: "Solange Muk Ex Ihr aktiver Poké Mon Mon ist, ignorieren Sie alle anderen Poké-Wäsche und -Bekörper, andere als giftiges Gas.",
            es: "Mientras Muk Ex sea su Poké Mon activo, ignore todas las potenciadoras y cuerpos de Poké que no sean gas tóxico.",
            it: "Finché Muk ex è il tuo poké attivo, ignora tutti i power e i power e i poké-corpi diversi dal gas tossico.",
            pt: "Enquanto Muk ex for o seu Poké de Mon ativo, ignore todos os bombeiros e os corpos que não sejam o gás tóxico.",
          },
      }],

      attacks: [
        {
          cost: ["Grass"],
          name: {
            en: "Poison Breath",
            ja: "毒の息",
            fr: "Souffle d'empoisonnement",
            de: "Gifteatte",
            es: "Respiración venenosa",
            it: "Respiro veleno",
            pt: "Respiração venenosa",
          },
          effect: {
            en: "The Defending Pokemon is now Poisoned.",
            ja: "防御ポケモンは現在中毒になっています。",
            fr: "Le Pokémon en défense est maintenant empoisonné.",
            de: "Das verteidigende Pokemon ist jetzt vergiftet.",
            es: "El Pokémon defensor ahora está envenenado.",
            it: "Il Pokemon in carica è ora avvelenato.",
            pt: "O Pokémon atual agora está envenenado.",
          },
          damage: 10,
        },
        {
          cost: ["Grass", "Grass", "Colorless"],
          name: {
            en: "Slimy Water",
            ja: "ぬるぬるした水",
            fr: "Eau gluante",
            de: "Schleimes Wasser",
            es: "Agua viscosa",
            it: "Acqua viscida",
            pt: "Água viscosa",
          },
          effect: {
            en: "Does 40 damage plus 10 more damage for each Colorless Energy in the Defending Pokemon's Retreat Cost (after applying effects to the Retreat Cost).",
            ja: "40のダメージに加えて、防御ポケモンリトリートコストの各無色エネルギーに対してさらに10ダメージを与えます（リトリートコストに効果を適用した後）。",
            fr: "Fait 40 dégâts plus 10 dommages supplémentaires pour chaque énergie incolore dans le coût de retraite en défense des Pokémon (après avoir appliqué des effets au coût de retraite).",
            de: "Fügt 40 Schäden plus 10 weitere Schäden für jede farblose Energie in den thaltenden Pokemon -Rückzugskosten (nach Anwendung der Auswirkungen auf die Rückzugskosten).",
            es: "Hace 40 daños más 10 daños más por cada energía incolora en el costo de retiro de Pokémon de defensa (después de aplicar efectos al costo de retirada).",
            it: "Fa 40 danni più 10 danni in più per ogni energia incolore nel costo di ritiro di Pokemon in carica (dopo aver applicato gli effetti sul costo di ritiro).",
            pt: "Causa 40 danos mais 10 mais danos para cada energia incolor no custo do retiro de Pokemon atual (após aplicar efeitos ao custo do retiro).",
          },
        },
      ],

      retreat: 2,

      variants: [
        {
          type: "holo",
          stamp: ["1st edition"],
        },
        {
          type: "holo",
          subtype: "unlimited",
        },
      ],
};
