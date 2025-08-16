import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
      set: Set,
      name: {
         en: "Dark Gloom",
         ja: "暗い暗闇",
         fr: "Obscurcir",
         de: "Dunkle Dunkelheit",
         es: "Penumbra oscura",
         it: "Oscura oscura",
         pt: "Escuridão escura",
      },

      rarity: "Uncommon",
      category: "Pokemon",
      dexId: [44],
      hp: 50,
      types: ["Grass"],
      stage: "Stage1",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Pollen Stench",
            ja: "花粉の悪臭",
            fr: "Puanteur",
            de: "Pollen Gestank",
            es: "Hedor de polen",
            it: "Puzza di polline",
            pt: "Pólen fedor",
          },
          effect: {
            en: "Once during your turn <em>(before your attack)</em>, you may flip a coin. If heads, the Defending Pokmon is now Confused; if tails, your Active Pokmon is now Confused. This power can't be used if Dark Gloom is Asleep, Confused, or Paralyzed.",
            ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、防御するポクモンは今混乱しています。尾の場合、アクティブなポクモンが混乱しています。暗い暗闇が眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
            fr: "Une fois pendant votre tour <em> (avant votre attaque) </em>, vous pouvez retourner une pièce. Si les têtes, le Pokmon en défense est maintenant confus; Si Tails, votre Pokmon actif est maintenant confus. Ce pouvoir ne peut pas être utilisé si la morosité sombre est endormie, confuse ou paralysée.",
            de: "Sobald Sie in Ihrem Zug <em> (vor Ihrem Angriff) </em> sind, können Sie eine Münze umdrehen. Wenn Köpfe, ist das verteidigende Pokmon jetzt verwirrt; Wenn Schwänze, ist Ihr aktives Pokmon jetzt verwirrt. Diese Kraft kann nicht verwendet werden, wenn dunkle Dunkelheit schläft, verwirrt oder gelähmt ist.",
            es: "Una vez durante su turno <em> (antes de su ataque) </em>, puede voltear una moneda. Si se dirige, el Pokmon defensor ahora está confundido; Si Tails, su Pokmon activo ahora está confundido. Este poder no se puede usar si la penumbra oscura está dormida, confundida o paralizada.",
            it: "Una volta durante il tuo turno <em> (prima del tuo attacco) </em>, puoi capovolgere una moneta. Se la testa, il Pokmon in carica è ora confuso; Se le code, il tuo Pokmon attivo è ora confuso. Questo potere non può essere usato se l'oscurità scura è addormentata, confusa o paralizzata.",
            pt: "Uma vez durante o seu turno <em> (antes do seu ataque) </em>, você pode virar uma moeda. Se as cabeças, o defesa do Pokmon agora está confuso; Se caudas, seu Pokmon ativo agora está confuso. Esse poder não pode ser usado se a escuridão escura estiver dormindo, confusa ou paralisada.",
          },
      }],

      attacks: [
        {
          cost: ["Grass", "Grass"],
          name: {
            en: "Poisonpowder",
            ja: "毒パウダー",
            fr: "Poudre empoisonnée",
            de: "Giftpulver",
            es: "Pozal de veneno",
            it: "Velenco",
            pt: "Poisonpowder",
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
      ],

      retreat: 2,

      variants: [
        {
          type: "normal",
        },
      ],
};
